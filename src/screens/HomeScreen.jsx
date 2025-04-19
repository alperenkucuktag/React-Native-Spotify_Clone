import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React , {useContext} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AlbumContext } from '../context/AlbumContext'
import Loader from '../components/Loader'
import { CloudLightning } from 'iconsax-react-native'
import Error from '../components/Error'
import { imageURL } from '../utils/constants.js'

const HomeScreen = () => {
  
  const {albums, loading, error} = useContext(AlbumContext);
  
  
  return (
    <LinearGradient colors={["#131624","#131624"]} style={{flex:1}}>
      {
        loading ? (
          <Loader />
        ) 
        : error ? (
          <Error error={error} />
        )
        :
        <ScrollView  
        style={{marginTop: 50}} 
        contentContainerStyle={{paddingBottom: 100}}
        >
        
        <View style={styles.header}>
          <View style={styles.headerContent} >
          <Image
              source={{uri: imageURL || "https://i.pravatar.cc/150"}}
              style={styles.headerImage}
            />
          
          <Text style={{color:"white"}} >Udemig</Text>
             
          </View>

          <CloudLightning color='white' size={20} />
        </View>


        <View style={styles.tabButton} >
          <Pressable>
            <Text>Music</Text>
          </Pressable>

          <Pressable>
            <Text>Podcasts & Show </Text>
          </Pressable>

        </View>


        </ScrollView>
      }


    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header:{
    padding: 10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center"
  },

  headerImage:{
    width: 50,
    height: 50,
    // padding: 10,
    // borderRadius:20,
    // resizeMode: "cover",
    
  },
  headerContent:{

  }
})