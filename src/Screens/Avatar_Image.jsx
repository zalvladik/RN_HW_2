import { View,Image,StyleSheet } from "react-native"
import Svg_container from "./Svg_container"

function  AvatarImage(){
    return(
        <View>
            <Image style={styles.avatar_img}></Image>
                <Svg_container/>
        </View>
    )
}

export default AvatarImage

const styles = StyleSheet.create({
    avatar_img:{
        width:120,
        height:120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
})