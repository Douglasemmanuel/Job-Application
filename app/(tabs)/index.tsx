import { StyleSheet , Image , SafeAreaView , TextInput , KeyboardAvoidingView , TouchableWithoutFeedback  , Platform , Keyboard , ScrollView, Linking , TouchableOpacity } from 'react-native';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
export default function TabOneScreen() {
  return (
    <SafeAreaView style={{backgroundColor: 'transparent' , flex:1}}>
      <KeyboardAvoidingView     behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={{marginLeft:3  }} >
      <Top/>
      <Bar/>
      <Recommend/>
      <Recent/>
    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const Top = ()=>{
  return (
    <View style={{flexDirection:'row' , marginTop:40,marginLeft:10  }}>
     <View style={{flex:6}}>
     <Text style={{fontSize:25 , fontWeight:'bold'}}>Find Your </Text>
      <Text style={{fontSize:30 , fontWeight:"bold"}}>Dream Job </Text>
     </View>
     <View style={styles.Imagecontainer}>
      <Image 
      source={require('../../assets/images/HNGPIX.jpg')} 
      style={styles.roundImage}
      
      />
     </View>
    </View>
  )
}

const Bar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container2}>
      <View style={styles.searchBarContainer}>
        {/* Search Icon */}
        <FontAwesome
        name="search" size={20}   color="#888"    style={styles.icon}/>
         

        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search job by skill , Designation"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </View>
  );
};
const Recommend =()=>{
  const handleButtonPress1 = ()=>{
    Linking.openURL('https://hng.tech/hire/android-developers')
  };
  const handleButtonPress2 = ()=>{
    Linking.openURL('http://hng.tech/hire/kotlin-developers')
  };
  const handleButtonPress3 = ()=>{
    Linking.openURL('https://hng.tech/hire/mobile-ui-ux-developers')
  };
  const handleButtonPress4 = ()=>{
    Linking.openURL('https://hng.tech/hire/android-developers')
  };
  return(
    <View style={{marginTop:20 ,backgroundColor: 'transparent',marginLeft:10 }}>
      <Text style={{fontSize:25 , fontWeight:'bold'}}>Recommended</Text>
      <ScrollView horizontal={true} style={{ marginTop: 10 }} showsHorizontalScrollIndicator={true}>
    {/* <ScrollView 
    horizontal={true}   // Enable horizontal scrolling
    showsHorizontalScrollIndicator={true}
    contentContainerStyle={styles.scrollViewContainer}  // Show horizontal scroll indicator
    // contentContainerStyle={{ flexDirection: 'row'  }}
    > */}
    <View style={{flexDirection:'row' , gap:10}}>
     <View style={styles.RecoBarContainer}>
      <View style={{backgroundColor: 'transparent' ,flexDirection:'row'}}>
      <View style={styles.RecentImagecontainer}>
      <Image 
      source={require('../../assets/images/HNGPIX.jpg')} 
      style={styles.RecentroundImage}
      
      />
     </View>
     <View style={{flex:2.5,backgroundColor: 'transparent' , marginTop:3}}>
      <Text style={{fontWeight:"600" , fontSize:16}}>Android Developer</Text>
      <Text style={{fontWeight:"650" , fontSize:15, marginTop:5}}>HNG</Text>
      <View style={{flexDirection:'row',backgroundColor: 'transparent', marginTop:5}}>
      <FontAwesome
        name="map" size={20}   color="blue"    style={styles.icon}/>
        <Text style={{fontWeight:"650" , fontSize:15}}>Remote</Text>
      </View>
     </View>
     
     

      </View>
      <View style={{flexDirection:'row',backgroundColor: 'transparent' , gap:10, marginTop:10}}>
      <View style={styles.ApplyContainer}>
      <TouchableOpacity onPress={handleButtonPress1}>
      <Text style={{fontWeight:'bold' , fontSize:16 , color:'white'}}>Apply</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.ApplyContainer2}>
        <TouchableWithoutFeedback>
        <Text style={{fontWeight:'bold' , fontSize:16}}>Share</Text>
        </TouchableWithoutFeedback>
     
      </View>
      </View>
      </View>
      <View style={styles.RecoBarContainer}>
      <View style={{backgroundColor: 'transparent' ,flexDirection:'row'}}>
      <View style={styles.RecentImagecontainer}>
      <Image 
      source={require('../../assets/images/HNGPIX.jpg')} 
      style={styles.RecentroundImage}
      
      />
     </View>
     <View style={{flex:2.5,backgroundColor: 'transparent', marginTop:3 }}>
      <Text style={{fontWeight:"600" , fontSize:16}}>Kotlin Developer</Text>
      <Text style={{fontWeight:"650" , fontSize:15 , marginTop:5}}>HNG</Text>
      <View style={{flexDirection:'row',backgroundColor: 'transparent' , marginTop:5}}>
      <FontAwesome
        name="map" size={20}   color="blue"    style={styles.icon}/>
        <Text style={{fontWeight:"650" , fontSize:15}}>Remote</Text>
      </View>
     </View>
     
     

      </View>
      <View style={{flexDirection:'row',backgroundColor: 'transparent' , gap:10 , marginTop:10}}>
      <View style={styles.ApplyContainer}>
      <TouchableOpacity onPress={handleButtonPress2}>
      <Text style={{fontWeight:'bold' , fontSize:16 , color:'white'}}>Apply</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.ApplyContainer2}>
        <TouchableWithoutFeedback>
        <Text style={{fontWeight:'bold' , fontSize:16}}>Share</Text>
        </TouchableWithoutFeedback>
     
      </View>
      </View>
      </View>
      
   
      
     </View>
    </ScrollView>
    </View>
  )
}
const Recent =()=>{
  const handleButtonPress1 = ()=>{
    Linking.openURL('https://hng.tech/hire/react-native-developers')
  };
  const handleButtonPress2 = ()=>{
    Linking.openURL('http://hng.tech/hire/kotlin-developers')
  };
  const handleButtonPress3 = ()=>{
    Linking.openURL('https://hng.tech/hire/fluttter-developers')
  };
  const handleButtonPress4 = ()=>{
    Linking.openURL('https://hng.tech/hire/android-developers')
  };
  const handleButtonPress5 = ()=>{
    Linking.openURL('https://github.com/Douglasemmanuel/Job-Application')
  };
  
  return(
    <View style={{marginTop:20,marginLeft:10}}>
      <Text style={{fontSize:25 , fontWeight:'bold'}}>Recent jobs</Text>
      <View style={styles.RecentBarContainer}>
      <View style={styles.RecentImagecontainer}>
      <Image 
      source={require('../../assets/images/HNGPIX.jpg')} 
      style={styles.RecentroundImage}
      
      />
     </View>
     <View style={{flex:3.5,backgroundColor: 'transparent'  }}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>React-Native Developer</Text>
      <Text style={{fontWeight:"450" , fontSize:14}}>HNG</Text>
      <View style={{flexDirection:'row',backgroundColor: 'transparent' , marginTop:5}}>
      <FontAwesome
        name="map" size={20}   color="blue"    style={styles.icon}/>
        <Text style={{fontWeight:"650" , fontSize:15}}>Remote</Text>
      </View>
      <View style={{marginTop:10,backgroundColor: 'transparent' }}>
      <View style={styles.ApplyContainer3}>
      <TouchableOpacity onPress={handleButtonPress1}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>Apply</Text>
      </TouchableOpacity>
     
      </View>
      </View>
     </View>
     <View style={{flex:1.5 ,backgroundColor: 'transparent', top: 70,left: 30 }}>
     
      <Text style={{fontWeight:'400' , fontSize:16, color:'black' }}>just now</Text>
     </View>
      </View >
      
      <View style={styles.RecentBarContainer}>
      <View style={styles.RecentImagecontainer}>
      <Image 
      source={require('../../assets/images/HNGPIX.jpg')} 
      style={styles.RecentroundImage}
      
      />
     </View>
     <View style={{flex:3.5,backgroundColor: 'transparent'}}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>Android Developer</Text>
      <Text style={{fontWeight:"450" , fontSize:14}}>HNG</Text>
      <View style={{flexDirection:'row',backgroundColor: 'transparent' , marginTop:5}}>
      <FontAwesome
        name="map" size={20}   color="blue"    style={styles.icon}/>
        <Text style={{fontWeight:"650" , fontSize:15}}>Remote</Text>
      </View>
      <View style={{marginTop:10,backgroundColor: 'transparent' }}>
      <View style={styles.ApplyContainer3}>
      <TouchableOpacity onPress={handleButtonPress4}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>Apply</Text>
      </TouchableOpacity>
     
      </View>
      </View>
      
      
     </View>
     <View style={{flex:1.5 ,backgroundColor: 'transparent', top: 70,left: 30 }}>
     
      <Text style={{fontWeight:'400' , fontSize:16, color:'black' }}>just now</Text>
     </View>
      </View >

      <View style={styles.RecentBarContainer}>
      <View style={styles.RecentImagecontainer}>
      <Image 
      source={require('../../assets/images/HNGPIX.jpg')} 
      style={styles.RecentroundImage}
      
      />
     </View>
     <View style={{flex:3.5,backgroundColor: 'transparent' }}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>Kotlin Developer</Text>
      <Text style={{fontWeight:"450" , fontSize:14}}>HNG</Text>
      <View style={{flexDirection:'row',backgroundColor: 'transparent' , marginTop:5}}>
      <FontAwesome
        name="map" size={20}   color="blue"    style={styles.icon}/>
        <Text style={{fontWeight:"650" , fontSize:15}}>Remote</Text>
      </View>
      <View style={{marginTop:10,backgroundColor: 'transparent' }}>
      <View style={styles.ApplyContainer3}>
      <TouchableOpacity onPress={handleButtonPress2}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>Apply</Text>
      </TouchableOpacity>
     
      </View>
      </View>
     </View>
     <View style={{flex:1.5 ,backgroundColor: 'transparent', top: 70,left: 30 }}>
     
      <Text style={{fontWeight:'400' , fontSize:16, color:'black' }}>just now</Text>
     </View>
      </View >

      <View style={styles.RecentBarContainer}>
      <View style={styles.RecentImagecontainer}>
      <Image 
      source={require('../../assets/images/HNGPIX.jpg')} 
      style={styles.RecentroundImage}
      
      />
     </View>
     <View style={{flex:3.5,backgroundColor: 'transparent' }}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>Flutter Developer</Text>
      <Text style={{fontWeight:"450" , fontSize:14}}>HNG</Text>
      <View style={{flexDirection:'row',backgroundColor: 'transparent' , marginTop:5}}>
      <FontAwesome
        name="map" size={20}   color="blue"    style={styles.icon}/>
        <Text style={{fontWeight:"650" , fontSize:15}}>Remote</Text>
      </View>
      <View style={{marginTop:10,backgroundColor: 'transparent' }}>
      <View style={styles.ApplyContainer3}>
      <TouchableOpacity onPress={handleButtonPress3}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>Apply</Text>
      </TouchableOpacity>
     
      </View>
      </View>
     </View>
     <View style={{flex:1.5 ,backgroundColor: 'transparent', top: 70,left: 30 }}>
     
      <Text style={{fontWeight:'400' , fontSize:16 , color:'black'  }}>just now</Text>
     </View>
      </View >
      <View style={styles.RecentBarContainer}>
      <View style={styles.RecentImagecontainer}>
      <Image 
      source={require('../../assets/images/HNGPIX.jpg')} 
      style={styles.RecentroundImage}
      
      />
     </View>
     <View style={{flex:3.5,backgroundColor: 'transparent' }}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>GitHub Repository</Text>
      <Text style={{fontWeight:"450" , fontSize:14}}>HNG</Text>
      {/* <View style={{flexDirection:'row',backgroundColor: 'transparent' , marginTop:5}}>
      <FontAwesome
        name="map" size={20}   color="blue"    style={styles.icon}/>
        <Text style={{fontWeight:"650" , fontSize:15}}>Remote</Text>
      </View> */}
      <View style={{marginTop:10,backgroundColor: 'transparent' }}>
      <View style={styles.ApplyContainer3}>
      <TouchableOpacity onPress={handleButtonPress5}>
      <Text style={{fontWeight:'bold' , fontSize:16}}>REPO</Text>
      </TouchableOpacity>
     
      </View>
      </View>
     </View>
     <View style={{flex:1.5 ,backgroundColor: 'transparent', top: 70,left: 30 }}>
     
      <Text style={{fontWeight:'400' , fontSize:16 , color:'black'  }}>just now</Text>
     </View>
      </View >
    </View>
  )
}
const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Imagecontainer: {
    marginTop:10,
    flex: 1,
  },
  roundImage: {
    width: 50,  // You can set any width you want
    height: 50, // Same as width for a perfect circle
    borderRadius: 75,  // Half of the width or height for a round effect
    resizeMode: 'cover', // Or 'contain' depending on your preference
  },


  //searchbar style 
  container2: {
    marginTop:25,
    marginLeft:10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10, // Makes the container round
    paddingHorizontal: 15,
    width: '97%', // Adjust the width as needed
    height: 50, // Height of the search bar
    elevation: 5, // Optional: Adds shadow for Android
    shadowColor: '#000', // Optional: Adds shadow for iOS
    shadowOpacity: 0.1, // Optional: Adds shadow for iOS
    shadowRadius: 10, // Optional: Adds shadow for iOS
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1, // Makes the input take up remaining space
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  RecentBarContainer: {
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10, // Makes the container round
    paddingHorizontal: 15,
    width: '97%', // Adjust the width as needed
    // height: 80, // Height of the search bar
    elevation: 5, // Optional: Adds shadow for Android
    shadowColor: '#000', // Optional: Adds shadow for iOS
    shadowOpacity: 0.1, // Optional: Adds shadow for iOS
    shadowRadius: 10, // Optional: Adds shadow for iOS
  },
  RecentImagecontainer: {
    // marginTop:4,
    flex: 1,
    backgroundColor: 'transparent', 
  },
  RecentroundImage: {
    // marginBottom:4,
    // flex: 1,
    width: 50,  // You can set any width you want
    height: 50, // Same as width for a perfect circle
    borderRadius: 10,  // Half of the width or height for a round effect
    resizeMode: 'cover', // Or 'contain' depending on your preference
  },
  RecoBarContainer: {
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10, // Makes the container round
    paddingHorizontal: 15,
    width: '60%', // Adjust the width as needed
    elevation: 5, // Optional: Adds shadow for Android
    shadowColor: '#000', // Optional: Adds shadow for iOS
    shadowOpacity: 0.1, // Optional: Adds shadow for iOS
    shadowRadius: 10, // Optional: Adds shadow for iOS

  },
  ApplyContainer: {
    flex:1,
    paddingTop:5,
    paddingBottom:5,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5, // Makes the container round
    width: '40%', // Adjust the width as needed
    // height: 100, // Height of the search bar
  },
    
  ApplyContainer2: {
    flex:1,
    paddingTop:5,
    paddingBottom:5,
    alignItems: 'center',
    backgroundColor: 'transparent', // Makes the background transparent
    borderWidth: 2,                 // Defines the border thickness
    borderColor: 'black',
    borderRadius: 5, // Makes the container round
    width: '40%', // Adjust the width as needed
    // height: 100, // Height of the search bar
  },
  scrollViewContainer: {
    // padding: 3,
    flexGrow: 1,  // Ensures the scroll view behaves correctly with multiple components
  },
  ApplyContainer3: {
    flex:1,
    paddingTop:5,
    paddingBottom:5,
    alignItems: 'center',
    backgroundColor: 'transparent', // Makes the background transparent
    borderWidth: 2,                 // Defines the border thickness
    borderColor: 'black',
    borderRadius: 5, // Makes the container round
    width: '40%', // Adjust the width as needed
    // height: 100, // Height of the search bar
  },

});
