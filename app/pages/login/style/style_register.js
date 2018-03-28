import {
	StyleSheet,
	Platform,
	Dimensions,
	PixelRatio
} from 'react-native';
import Color from '../../../config/colors';
import Size from '../../../config/size';
import Utils from '../../../config/utils';
module.exports = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center',
        backgroundColor : Color.background,
        paddingHorizontal : Size.s40,
        paddingTop : Size.s80,
        paddingBottom : Size.s64,
	},
	bg_logo:{
        alignItems: 'center',
	},
    icon_bg:{
        width: Size.s269,
        height: Size.s269,
    },
    icon_logo:{
		position:'absolute',	
        width: Size.s38,
		height: Size.s60,
		resizeMode:'center',
		marginTop: Size.s30,
	},
	content:{
		marginTop: Size.s_72,
		flex:1,
		alignItems:'center',
		justifyContent: 'center',
	},
	loginContent:{
		marginTop: Size.s_133,
		flex:1,
		alignItems:'center',
		justifyContent: 'center',
	},
    loginTextStyles:{
		height : Size.s45,
		width : Utils.size.width - Size.s80,
		alignItems:'center',
		textAlign:"center",
		justifyContent: 'center',
        backgroundColor:Color.black030,
		borderRadius: Size.s3,
		marginBottom: Size.s15,
		color: 'white',
		fontSize : Size.normalize(12)		
    },
    codeStyle:{
		flexDirection:'row',
		height : Size.s45,
		width : Utils.size.width - Size.s80,
		marginBottom: Size.s15,
    },
    codeTextStyle:{
		flex : 2,
		alignItems:'center',
		textAlign:"center",
		justifyContent: 'center',
        backgroundColor:Color.black030,
		borderRadius: Size.s3,
		color: 'white',
		fontSize : Size.normalize(12)		
	},
	sendCode:{
		flex:1,
		marginLeft: Size.s10,
		backgroundColor: 'white',
		borderColor: 'transparent'
	},
	sendBtn:{
		fontSize : Size.normalize(12),
	},
	registerBtn : {
		width : Utils.size.width - Size.s80,
		height : Size.s45,
		borderRadius: Size.s3,
		marginTop: Size.s10,
		borderColor: 'transparent',
	},
	loginBtn : {
		width : Utils.size.width - Size.s80,
		height : Size.s45,
		borderRadius : Size.s3,
		marginTop : Size.s72,
		borderColor : 'transparent',
	},
	loginBtnText : {
		fontSize : Size.normalize(12)		
	},
	agreement:{
		color:Color.white50,
		marginTop: Size.s20,
		fontSize : Size.normalize(14)
	},

	lr_container:{
        flex : 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	lr_btn_txt_view:{
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 20,
	},
	lr_btn_txt:{
		padding: 10,
		borderRadius: 5,
		borderColor: 'gray',
		borderWidth: 0.5,
		marginHorizontal: 20,
	},
	lr_btn_txt_l:{
		padding: 10,
		borderRadius: 5,
		borderColor: 'gray',
		borderWidth: 0.5,
		marginHorizontal: 20,
		marginBottom: 10,
		
	},
	lr_text:{
		color:Color.blue1,
		fontSize : Size.normalize(12),
	}
})