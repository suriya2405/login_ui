import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, View,StatusBar,Text,TouchableOpacity,Image} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import StockViewPage from './StockViewPage';

const Dashboard = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconsContainer}>
        <Ionicons name='menu' size={32} color='black' />
        <Text style={styles.titleText}>News Sentiment Analysis</Text>
        <FontAwesome5 name='bell' size={32} color='black' />
      </View>
      <View>
        <Text style={styles.introtext}>Welcome, Karthick !</Text>
      </View>
      <View style={styles.outerContainer}>
        <View style={styles.intro_container}>
            <Text style={{fontSize:16,color:'white',paddingLeft:10,}}>Pick the right stock at right time</Text>
          <View style={styles.inlinespacebetween}>
            <Text style={{fontSize:32,color:'white',padding:20}}>50,000 INR</Text>
            <View style={{padding:20}}>
            <TouchableOpacity style={{backgroundColor: 'white',borderRadius: 12,borderWidth: 1,borderColor: 'black', paddingVertical: 10,paddingHorizontal: 20,}}
                onPress={()=>{}}
              >
                <Text>Learn more</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.outerContainer}>
        <View style={styles.centerContainer}>
          <View style={styles.inlinespacebetween}>
                <Text>Stock Predictions</Text>
                <TouchableOpacity style={{backgroundColor:'transparent',flexDirection: 'row',
      justifyContent:'space-between',}} onPress={() => navigation.navigate(StockViewPage)}>
                  <Text style={{color:'green'}}>See all -&gt;</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.inlinespacearound}>
                <View style={{backgroundColor:'green',borderRadius:12}}>
                  <View style={{justifyContent:'center',padding:10}}>
                    <Text style={{fontSize:18,color:'white'}}>Tesla</Text>
                    <Text style={{fontSize:12,color:'white'}}>12% increase</Text>
                  </View>
                  <View style={{padding:5}}>
                    <Image source={{uri:'https://i.pinimg.com/564x/4d/d8/ba/4dd8ba96dc40139af0d43c0201b53bc8.jpg'}} style={styles.imageContainer}/>
                  </View>
                </View>
                <View style={{backgroundColor:'red',borderRadius:12}}>
                  <View style={{justifyContent:'center',padding:10}}>
                    <Text style={{fontSize:18,color:'white'}}>Apple</Text>
                    <Text style={{fontSize:12,color:'white'}}>7% decrease</Text>
                  </View>
                  <View style={{padding:5}}>
                      <Image source={{uri:'https://i.pinimg.com/564x/59/a3/24/59a324a11961c790697bd3748c854e70.jpg'}} style={styles.imageContainer}/>
                  </View>
                </View>
                <View style={{backgroundColor:'green',borderRadius:12}}>
                  <View style={{justifyContent:'center',padding:10}}>
                    <Text style={{fontSize:18,color:'white'}}>Google</Text>
                    <Text style={{fontSize:12,color:'white'}}>14% increase</Text>
                  </View>
                  <View style={{padding:5}}>
                      <Image source={{uri:'https://i.pinimg.com/564x/4d/d8/ba/4dd8ba96dc40139af0d43c0201b53bc8.jpg'}} style={styles.imageContainer}/>
                  </View>
                </View>
          </View>
        </View>
      </View>
      <View style={styles.outerContainer}>
          <View style={styles.centerContainer}>
              <View style={styles.inlinespacebetween}>
                <Text>Latest News</Text>
                <TouchableOpacity><Text style={{color:'green'}}>See all -&gt;</Text></TouchableOpacity>
              </View>
              <View style={styles.outerContainer}>
                <View style={styles.inlinespacebetween}>
                  <View>
                      <Text style={{padding:5,fontSize:19,fontWeight:'bold'}}>Apple stock Crashes</Text>
                      <Text numberOfLines={2} ellipsizeMode={'tail'} style={{padding:5}}>After Tim Cook rejected Narendra Modi’s invitation to Ram Mandir, Investors sell...</Text>
                  </View>
                  <View style={{justifyContent:'center'}}>
                      <Image source={{uri:"https://pics.craiyon.com/2023-11-17/pMpAeePBTOKs1vpcCjThyw.webp"}} style={styles.circleimg}/>
                  </View>
                </View>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.outerContainer}>
                <View style={styles.inlinespacebetween}>
                    <View>
                        <Text style={{padding:5,fontSize:19,fontWeight:'bold'}}>Tesla Stock Soars!</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={{paddingRight:23}}>After accidentally discovering that tiny creatures running on </Text>
                    </View>
                    <View>
                      <Image source={{uri:"https://media.designrush.com/inspirations/269904/conversions/1.Tesla-Logo-Design-preview.jpg"}} style={styles.circleimg}/>
                    </View>
                </View>
              </View>
          </View>
      </View>
      <StatusBar></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconsContainer: {
    flexDirection: 'row', // Arrange icons horizontally
    justifyContent: 'space-between', // Distribute space between icons
    paddingHorizontal: 10, // Add some horizontal padding to the container
    width: '100%',
    height:'auto' // Ensure the container takes full width
  },
  imageContainer:{
    height: 70,
    width:100,
    resizeMode:'cover'
  },
  circleimg:{
    height:70,
    width:70,
    resizeMode:'cover',
    borderRadius:50,
  },
  inlinespacebetween: {
    flexDirection: 'row',
    justifyContent:'space-between', 
    padding:4
  },
  inlinespacearound:{
    flexDirection: 'row',
    justifyContent:'space-around', 
    padding:10
  },
  centerContainer:{
    color:'white',
    borderWidth:0.5,
    borderRadius: 12,
    borderColor:'black',
    padding:5
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  introtext:{
    fontSize:32,
    paddingLeft:10,
    paddingTop:20
  },
  intro_container: {
    backgroundColor: 'green',
    borderRadius: 10, // Adjust the borderRadius as needed
    padding: 5, // Adjust padding as needed
  },
  outerContainer:{
    padding:10,
  },
  separator: {
    paddingHorizontal:50,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});

export default Dashboard;
