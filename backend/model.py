from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import numpy as np
import joblib  # Add this import statement for loading the model
import logging
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = FastAPI()

logger = logging.getLogger(__name__)

# Load XGBoost model
model = joblib.load("login_ui/backend/stock_predictor (1).pkl")

class InputData(BaseModel):
    text: str  # Text for sentiment analysis
    open: float
    adj_close: float

class PredictionResult(BaseModel):
    prediction: float

class SentimentResponse(BaseModel):
    negative: float
    neutral: float
    positive: float
    polarity: float

def get_sentiment(text):
    analyzer = SentimentIntensityAnalyzer()
    sentiment = analyzer.polarity_scores(text)
    polarity = (sentiment['pos'] - sentiment['neg']) / (sentiment['pos'] + sentiment['neu'] + sentiment['neg'])
    return sentiment['neg'], sentiment['neu'], sentiment['pos'], polarity

@app.post("/predict", response_model=PredictionResult)
def analyze_and_predict(input_data: InputData):
    try:
        # Sentiment analysis
        neg_sent, neu_sent, pos_sent, polarity = get_sentiment(input_data.text)

        # Prepare input data for prediction
        input_array = np.array([[polarity, pos_sent, neu_sent, neg_sent, input_data.open, input_data.adj_close]])
        
        # Make prediction
        prediction = model.predict(input_array)

        # Convert prediction to a standard Python float
        prediction_value = float(prediction[0])
        
        # Return prediction
        return PredictionResult(prediction=prediction_value)

    except ValueError as e:
        logger.error(f"ValueError: {e}")
        return {"error": str(e)}

    except Exception as e:
        logger.error(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)