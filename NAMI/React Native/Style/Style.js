import { StyleSheet } from 'react-native';
import * as Scale from './Metrics'
export const MainColor = '#F6FFDE';
export const SecColor = '#3d7848';
export const TrdColor = "#4fa661";
export const FrthColor = "#75391d";
export const styles = StyleSheet.create({
  //General Styles
  container: {
    flexDirection: 'column',
    backgroundColor: MainColor,
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  headerView: {
    backgroundColor: MainColor,
    alignSelf: 'center',
    height: Scale.verticalScale(100),
    width: Scale.horizontalScale(400),
    maxHeight: Scale.verticalScale(100),
    maxWidthwidth: Scale.horizontalScale(400),
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Scale.moderateScale(40),
    left: Scale.moderateScale(20),
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(35),
    fontWeight: '500',
    color: SecColor,
    fontStyle: 'italic',

  },
  MSG: {
    color: SecColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(20),
  },
  //Home Page Style
  Button: {
    display: 'flex',
    height: Scale.verticalScale(40),
    width: Scale.horizontalScale(40),

    borderRadius: Scale.moderateScale(50),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Scale.verticalScale(40),
    right: Scale.horizontalScale(30),
    alignSelf: 'flex-end',
    backgroundColor: SecColor,

  },
  Buttontext: {
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(30),
    fontWeight: '500',
    color: MainColor,
  },

  MYGardCardDetails: {
    marginLeft: Scale.horizontalScale(5),
    marginRight: Scale.horizontalScale(5),
    marginTop: Scale.verticalScale(0),
    marginBottom: Scale.verticalScale(-20),
    justifyContent: 'space-between',
    alignContent: 'center',
    height: Scale.verticalScale(220),
    maxHeight: Scale.verticalScale(220),
    width: Scale.horizontalScale(170),
    maxWidth: Scale.horizontalScale(170),
    borderRadius: Scale.moderateScale(20),
    marginBottom:Scale.verticalScale(10)
  },
  MYGardCardName: {
    color: MainColor,
    shadowOpacity: 0.2,
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(20),
    top: Scale.moderateScale(-50),
    left: Scale.moderateScale(0),
    flexDirection: 'row',
    textShadowColor: 'black',
    textShadowRadius: 3,
    height: Scale.verticalScale(90),
    maxHeight: Scale.verticalScale(90),
    width: Scale.horizontalScale(170),
    maxWidth: Scale.horizontalScale(170),
  },
  MYGardCardImg: {
    height: Scale.verticalScale(220),
    maxHeight: Scale.verticalScale(220),
    width: Scale.horizontalScale(170),
    maxWidth: Scale.horizontalScale(170),
    borderRadius: Scale.moderateScale(20),
  },
  MYGardCardIcon: {
    top: Scale.verticalScale(-435),
    left: Scale.moderateScale(140),
    position:'absolute'
  },
  //Login Page Style
  NamiLogo: {
    height: Scale.verticalScale(100),
    width: Scale.horizontalScale(300)
  },
  Slogin: {
    fontSize: Scale.moderateScale(15),
    fontWeight: "bold",
    color: FrthColor,
    position: 'absolute',
    top: Scale.verticalScale(300)
  },
  SigninButton: {
    backgroundColor: SecColor,
    width: Scale.horizontalScale(330),
    padding: Scale.moderateScale(10),
    borderRadius: Scale.moderateScale(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Scale.horizontalScale(10),
    marginTop: Scale.verticalScale(80),
    marginBottom: Scale.verticalScale(150),
  },
  SigninButtonText: {
    fontWeight: "bold",
    color: MainColor,
    fontSize: Scale.moderateScale(20),

  },
  //Stack Navigator within AddToMyGarden Page Style
  StackHeaderView: {
    backgroundColor: SecColor,
  },
  StackHeader: {
    padding: Scale.moderateScale(10),
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(25),
    fontWeight: '500',
    color: MainColor,
    alignSelf: 'center',
  },
  face: {
    flex: 1,
    borderRadius: Scale.moderateScale(50),
    shadowOffset: { width: Scale.horizontalScale(8), height: Scale.verticalScale(8) },
    shadowRadius: Scale.moderateScale(5),
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 1,
    margin: Scale.moderateScale(19),
    width: Scale.horizontalScale(320),
    maxWidth: Scale.horizontalScale(320),
    height: Scale.verticalScale(200),
    maxHeight: Scale.verticalScale(200),
    alignItems: 'center'
  },

  back: {
    backgroundColor: "rgba(62, 214, 37, 0.15)",
    borderRadius: Scale.moderateScale(30),
    shadowOffset: { width: Scale.horizontalScale(8), height: Scale.verticalScale(8) },
    shadowRadius: Scale.moderateScale(5),
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 1,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderStyle: "solid",
    margin: Scale.moderateScale(19),
    width: Scale.horizontalScale(320),
    maxWidth: Scale.horizontalScale(320),
    height: Scale.verticalScale(200),
    maxHeight: Scale.verticalScale(200),
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  ADDPIMG: {
    width: Scale.horizontalScale(300),
    maxWidth: Scale.horizontalScale(300),
    height: Scale.verticalScale(200),
    maxHeight: Scale.verticalScale(200),
    borderRadius: Scale.moderateScale(30),
  },
  ADDPNAME: {
    position: 'absolute',
    bottom: Scale.verticalScale(20),
    left: Scale.horizontalScale(20),
    color: '#efffe0',
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(30),
    textShadowRadius: Scale.moderateScale(6),
    textShadowColor: 'black',
  },

  flipBack: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    maxHeight: Scale.verticalScale(200),
    height: Scale.verticalScale(200),
    maxWidth: Scale.horizontalScale(320),
    width: Scale.horizontalScale(320),
    alignContent: 'center',
    justifyContent: 'center'
  },

  flipPc: {
    maxHeight: Scale.verticalScale(90),
    height: Scale.verticalScale(90),
    textAlign: 'center',
    fontSize: Scale.moderateScale(20),
    maxWidth: Scale.horizontalScale(320),
    width: Scale.horizontalScale(320),
    color: SecColor,
    paddingTop: Scale.verticalScale(15),
    paddingRight: Scale.horizontalScale(5),
    paddingLeft: Scale.horizontalScale(5),
  },

  flipWt: {
    maxHeight: Scale.verticalScale(60),
    height: Scale.verticalScale(60),
    maxWidth: Scale.horizontalScale(320),
    width: Scale.horizontalScale(320),
    fontSize: Scale.moderateScale(20),
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flipWtXT: {
    color: SecColor,
    textAlign: 'center',
    fontSize: Scale.moderateScale(15)
  },
  ADDPButton: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  ADDPButtonText: {
    color: SecColor,
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(13),

  },
  //Cards Style within Nearby and AddToMyGarden Pages Style
  PlantCard: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: SecColor,
    margin: Scale.moderateScale(19),

    borderRadius: Scale.moderateScale(40),
    width: Scale.horizontalScale(320),
    maxWidth: Scale.horizontalScale(320),
    height: Scale.verticalScale(200),
    maxHeight: Scale.verticalScale(200),

  },
  CardDetails: {
    marginLeft: Scale.horizontalScale(5),
    marginRight: Scale.horizontalScale(5),
    marginTop: Scale.verticalScale(5),
    marginBottom: Scale.verticalScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  CardName: {
    alignSelf: 'center',
    color: MainColor,
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(20),
    fontWeight: 'bold',
    paddingLeft: Scale.horizontalScale(5),
  },
  CardImg: {
    height: Scale.verticalScale(120),
    maxHeight: Scale.verticalScale(120),
    width: Scale.horizontalScale(320),
    maxWidth: Scale.horizontalScale(320),

    borderRadius: Scale.moderateScale(40),
  },
  CardRate: {
    justifyContent: 'space-between',
  },
  CardRateEOF: {
    color: MainColor,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(10)
  },
  CardRateScore: {
    backgroundColor: MainColor,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: Scale.verticalScale(5),
    padding: Scale.moderateScale(3),
    paddingTop: Scale.verticalScale(13),
    height: Scale.verticalScale(40),
    width: Scale.horizontalScale(50),
    maxHeight: Scale.verticalScale(40),
    maxWidth: Scale.horizontalScale(50),
    borderColor: MainColor,

    borderRadius: Scale.moderateScale(50),
    borderBottomLeftRadius: Scale.moderateScale(0),
    borderTopRightRadius: Scale.moderateScale(0),
  },
  Score: {
    fontWeight: 'bold',
    color: SecColor,
    alignSelf: 'center',
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(11),
  },
  //New Card
  NEOFcard:{
    flex:1,
    flexDirection: 'row',
    width: Scale.horizontalScale(320),
    height: Scale.verticalScale(200),
    maxHeight: Scale.verticalScale(200),
    maxWidth: Scale.horizontalScale(320),
    shadowOffset: {
      width: Scale.horizontalScale(6),
      height: Scale.verticalScale(6),  
    },
    shadowRadius: Scale.moderateScale(6),
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: Scale.moderateScale(1),
    marginBottom: Scale.verticalScale(50),
    marginRight: Scale.horizontalScale(15),
    justifyContent:'center',
  },
  NEOFcardName:{
    flex:1,
    justifyContent:'center',
    color:MainColor,
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(20),
    maxHeight: Scale.verticalScale(50),
    maxWidth: Scale.horizontalScale(200),
    width: Scale.horizontalScale(200),
    height: Scale.verticalScale(50),
    transform:[{ rotate: '270deg'}],
    textAlign: 'center',
    paddingTop: Scale.verticalScale(15),
  },
  NEOFcardNameCon:{
    width: Scale.horizontalScale(50),
    height: Scale.verticalScale(200),
    maxHeight: Scale.verticalScale(200),
    maxWidth: Scale.horizontalScale(50),
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    borderTopLeftRadius: Scale.moderateScale(20),
    borderBottomLeftRadius: Scale.moderateScale(20),
    backgroundColor:TrdColor
  },
  NEOFcardDet:{
    flexDirection:'row',
    alignItems:'center',
    height: Scale.verticalScale(50),
    maxHeight: Scale.verticalScale(50),
    justifyContent:'space-evenly',
    flex:1,
    backgroundColor:SecColor,
    borderBottomRightRadius: Scale.moderateScale(20),
  },
  NEOFcardDetCON:{
    justifyContent:'center',
    flex:1,
  },
  NEOFcardDetIMG:{
    justifyContent:'center',
    flex:1,
  },
  NEOFcardEOF:{
    color:MainColor,
    fontSize: Scale.moderateScale(27),
  },
  NEOFcardWat:{
    color:MainColor,
    fontSize: Scale.moderateScale(20),
  },
  // Profile Page Style
  ProfileContainer: {
    flexDirection: 'column',
    backgroundColor: MainColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',


  },
  ProImg: {
    maxHeight: Scale.verticalScale(75),
    maxWidth: Scale.horizontalScale(75),
    width: Scale.horizontalScale(75),
    height: Scale.verticalScale(75),

    borderRadius: 1000,
    alignSelf: 'center'
  },
  UserName: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: SecColor,
    alignSelf: 'center',
    textAlign: 'center',
  },
  ProCon: {
    flex: 1,
    backgroundColor: SecColor,
    width: Scale.horizontalScale(340),
    maxWidth: Scale.horizontalScale(340),
    height: Scale.horizontalScale(220),
    maxHeight: Scale.horizontalScale(180),

    borderRadius: Scale.moderateScale(11),
    padding: Scale.moderateScale(10)
  },
  SProCon: {
    flex: 1,
    backgroundColor: SecColor,
    width: Scale.horizontalScale(340),
    maxWidth: Scale.horizontalScale(340),
    height: Scale.horizontalScale(230),
    maxHeight: Scale.horizontalScale(230),

    borderRadius: Scale.moderateScale(11),
    padding: Scale.moderateScale(10),
  },
  ProConHeader: {
    color: MainColor,
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(27),
    fontWeight: 'bold',
    padding: Scale.moderateScale(15)
  },
  ProConName: {
    color: MainColor,
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(20),
    fontWeight: 'bold',
    paddingLeft: Scale.horizontalScale(20),
  },
  ProConEle: {
    flexDirection: 'row',
    marginBottom: Scale.verticalScale(15),
    alignItems: 'center',
    paddingLeft: Scale.horizontalScale(20),
  },
  logout: {
    flex: 1,
    marginTop: Scale.verticalScale(15),
    bottom: Scale.verticalScale(10),
    maxHeight: Scale.verticalScale(45),
    maxWidth: Scale.horizontalScale(100),
    height: Scale.verticalScale(45),
    width: Scale.horizontalScale(100),
    position: 'absolute',
    top: 30,
    right: 0
  },

  logoutdesign: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: SecColor,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopRightRadius: Scale.moderateScale(150),
    borderTopLeftRadius: Scale.moderateScale(150),
    borderBottomRightRadius: Scale.moderateScale(150),
    borderBottomLeftRadius: Scale.moderateScale(150),
  },

  //ContacUS Page Style
  PAGETITLE: {
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(45),
    color: SecColor,
    textAlign: 'center',
  },
  TITAP: {
    flex: 1,
    maxHeight: Scale.verticalScale(130),
    position: 'absolute',
    top: Scale.moderateScale(80),
  },
  CONTCWAY: {

    borderRadius: Scale.moderateScale(14),
    backgroundColor: SecColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: Scale.verticalScale(7),
  },
  CONTCFILD: {
    flex: 1,
    position: 'absolute',
    top: Scale.moderateScale(210),
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxHeight: Scale.verticalScale(100),
    maxWidth: Scale.horizontalScale(250),
    height: Scale.verticalScale(100),
    width: Scale.horizontalScale(250),
    alignItems: 'stretch',
  },
  PAWC: {
    color: MainColor,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(14),
  },
  SocialMedia: {
    flex: 1,
    position: 'absolute',
    top: Scale.moderateScale(320),
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: Scale.horizontalScale(351),
    maxWidth: Scale.horizontalScale(351),
    height: Scale.verticalScale(250),
    maxHeight: Scale.verticalScale(250),
  },
  Sites: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    top: Scale.moderateScale(210),
    width: Scale.horizontalScale(350),
    maxWidth: Scale.horizontalScale(350),
    height: Scale.verticalScale(30),
    maxHeight: Scale.verticalScale(30),
  },
  SMC: {
    backgroundColor: SecColor,

    borderRadius: Scale.moderateScale(10),
    height: Scale.verticalScale(50),
    width: Scale.horizontalScale(50),
    justifyContent: 'center',
  },
  //Plant Page Style
  Plantcontainer: {
    flex: 1,
    backgroundColor: SecColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TxtCon: {
    flex: 1,
    position: 'absolute',

    alignSelf: 'center',
    top: Scale.moderateScale(-70),
    maxHeight: Scale.verticalScale(85),
    height: Scale.verticalScale(85),
  },
  txt: {
    color: MainColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(18),
  },
  PlantName: {
    color: MainColor,
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(30),
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  PlantNameCon: {
    flex: 1,
    top: Scale.moderateScale(-85),
    alignContent: 'center',
    justifyContent: 'center',
    height: Scale.verticalScale(35),
    width: Scale.horizontalScale(375),
    maxHeight: Scale.verticalScale(35),
    maxWidth: Scale.horizontalScale(375),
    flexDirection: 'row'
  },
  CardPhoto: {
    height: Scale.verticalScale(280),
    width: Scale.horizontalScale(380),
    maxHeight: Scale.verticalScale(380),
    maxWidth: Scale.horizontalScale(380),
    alignItems: 'center',
    position: 'absolute',
    top: Scale.moderateScale(0),
    borderBottomLeftRadius: Scale.moderateScale(50),
    borderBottomRightRadius: Scale.moderateScale(50),
  },
  EOFAW: {
    flex: 1,
    flexDirection: 'row',
    height: Scale.verticalScale(150),
    width: Scale.horizontalScale(375),
    maxHeight: Scale.verticalScale(150),
    maxWidth: Scale.horizontalScale(375),
    position: 'absolute',
    top: Scale.moderateScale(40),
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  EOFAWText: {
    color: MainColor,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(18),
    textAlign: 'left',
    height: Scale.verticalScale(25),
    width: Scale.horizontalScale(140),
    maxHeight: Scale.verticalScale(25),
    maxWidth: Scale.horizontalScale(140),
  },
  EOFAWPC: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  EOFAWS: {
    backgroundColor: MainColor,
    height: Scale.verticalScale(130),
    width: Scale.horizontalScale(140),
    maxHeight: Scale.verticalScale(130),
    maxWidth: Scale.horizontalScale(140),
    borderBottomLeftRadius: Scale.moderateScale(100),
    borderTopRightRadius: Scale.moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: Scale.verticalScale(10),
  },
  NUMOW: {
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(40),
    fontWeight: 'bold',
    color: SecColor,
    textAlign: 'center',
  },
  PW: {
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(18),
    fontWeight: 'bold',
    color: SecColor,
    textAlign: 'center',
  },
  ADDBTN: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: Scale.moderateScale(50),
  },
  PRSTEXT: {
    color: MainColor,
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  //AboutNami Page Style 
  PAGECONT: {
    flex: 1,
    justifyContent: 'center',
  },
  TiTL: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: Scale.moderateScale(30),
    color: SecColor,
    marginLeft: Scale.horizontalScale(20),
    paddingTop: Scale.verticalScale(10),
  },
  PARH: {

    borderRadius: 30,
  },
  TxTFORMAT: {
    fontSize: Scale.moderateScale(16),
    color: SecColor,
    textAlign: 'center',
    marginTop: Scale.verticalScale(5),
    padding: Scale.moderateScale(7),
    textAlign: 'justify',
  },
  CRTEDCON: {
    flex: 1,
    width: Scale.horizontalScale(380),
    maxWidth: Scale.horizontalScale(380),
    height: Scale.verticalScale(250),
    maxHeight: Scale.verticalScale(250),
  },
  GITACC: {
    flex: 1,
    textAlign: 'center',
    flexDirection: "row",

  },
  ACCOUNTC: {
    flex: 1,
    alignItems: 'center',
    marginTop: Scale.verticalScale(20),
  },

  CRTEDNAME: {
    textAlign: 'center',
    color: SecColor,
    //fontWeight: "bold",
    fontSize: Scale.moderateScale(13),
  },
  // Location permission Page Style
  TITASUB: {
    flex: 1,
    maxHeight: Scale.verticalScale(55),
    maxWidth: Scale.horizontalScale(260),
    position: 'absolute',
    height: Scale.verticalScale(55),
    width: Scale.horizontalScale(260),
    top: Scale.verticalScale(90),
    left: Scale.horizontalScale(25),

  },


  TitlePer: {
    fontWeight: 'bold',
    color: SecColor,
    fontSize: Scale.moderateScale(30),
    maxHeight: Scale.verticalScale(40),
    maxWidth: Scale.horizontalScale(350),
    height: Scale.verticalScale(40),
    width: Scale.horizontalScale(300),
  },

  SubTitle: {
    fontWeight: 'bold',
    fontSize: Scale.moderateScale(15),
    color: SecColor,
  },

  TWOITEMS: {
    flex: 1,
    position: 'absolute',
    top: Scale.verticalScale(200),
    maxHeight: Scale.verticalScale(250),
    maxWidth: Scale.horizontalScale(375),
    height: Scale.verticalScale(250),
    width: Scale.horizontalScale(375),
    justifyContent: "space-evenly",

  },

  RECOM: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',

  },

  TXTRECOM: {
    flex: 1,
    fontSize: Scale.moderateScale(13),
    fontWeight: 'bold',
    maxHeight: Scale.verticalScale(50),
    maxWidth: Scale.horizontalScale(260),
    height: Scale.verticalScale(100),
    width: Scale.horizontalScale(260),
    color: SecColor,
    textAlign:'justify'

  },

  ICONRECOM: {
    maxHeight: Scale.verticalScale(65),
    maxWidth: Scale.horizontalScale(65),
    height: Scale.verticalScale(65),
    width: Scale.horizontalScale(65),
    backgroundColor: SecColor,
    borderBottomLeftRadius: Scale.moderateScale(150),
    borderBottomRightRadius: Scale.moderateScale(150),
    borderTopRightRadius: Scale.moderateScale(150),
    borderTopLeftRadius: Scale.moderateScale(150),
    justifyContent: 'center',
  },

  CONTINUET: {
    fontSize: Scale.moderateScale(30),
    color: MainColor,
    textAlign: "center",
    flex: 1,
  },

  CONTINUECLC: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: SecColor,
    alignSelf: "center",
    position: 'absolute',
    top: Scale.verticalScale(150),
    maxHeight: Scale.verticalScale(46.5),
    maxWidth: Scale.horizontalScale(200),
    height: Scale.verticalScale(45),
    width: Scale.horizontalScale(200),
    alignItems: 'center',
    borderRadius: Scale.moderateScale(100),
  },

  //Dashboard style
  ADMN:{
    fontFamily: 'Helvetica',
    fontSize: Scale.moderateScale(15),
    fontWeight: '400',
    color: SecColor,
    fontStyle: 'italic',
  },
  DASHUPITM: {
    flex: 1, 
    maxHeight: Scale.verticalScale(350), 
    height: Scale.verticalScale(350),
    maxWidth: Scale.horizontalScale(370), 
    width: Scale.horizontalScale(370),
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  NUMOFUSR: {
    flex:1, 
     maxHeight: Scale.verticalScale(200), 
     height:Scale.verticalScale(200),
     maxWidth: Scale.horizontalScale(100),
     width: Scale.horizontalScale(100),
     justifyContent: 'center', 
     alignItems: 'center', 
     borderRadius: Scale.moderateScale(20),
     backgroundColor:'rgba(79, 166, 97,1)'
  },

  NUMOFPLNT: {
    flex:1, 
    maxHeight: Scale.verticalScale(200), 
    height:Scale.verticalScale(200),
    maxWidth: Scale.horizontalScale(100),
    width: Scale.horizontalScale(100),
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: Scale.moderateScale(20),
    backgroundColor:'rgba(79, 166, 97,0.9)'
  },

  PLNTAVG: {
    flex:1,
    maxHeight: Scale.verticalScale(200), 
    height:Scale.verticalScale(200),
    maxWidth: Scale.horizontalScale(100),
    width: Scale.horizontalScale(100),
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: Scale.moderateScale(20),
    backgroundColor:'rgba(79, 166, 97,0.8)',
  },

  NUMOFUSRTXT: {
    fontSize: Scale.moderateScale(40),
    fontFamily: 'Helvetica', 
    fontWeight: 'bold', 
    fontStyle: 'italic',
    textShadowRadius: Scale.moderateScale(0.2),
    textShadowColor: 'black',
    color:MainColor,
  },

  USRDIS: {
    fontSize: Scale.moderateScale(12), 
    textAlign: 'center', 
    width: Scale.horizontalScale(95), 
    fontWeight: '500',
    fontStyle: 'italic', 
    color:MainColor,
  },

  CARD1: {
    flex:1,
    alignSelf: 'flex-start', 
    maxHeight: Scale.verticalScale(150),
    height: Scale.verticalScale(150),
    width: Scale.horizontalScale(150), 
    maxWidth: Scale.horizontalScale(150), 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: Scale.moderateScale(25),
    backgroundColor:'rgba(79, 166, 97,0.7)'
  },

  CARD2: {
    flex:1,
    alignSelf: 'flex-start', 
    maxHeight: Scale.verticalScale(150),
    height: Scale.verticalScale(150),
    width: Scale.horizontalScale(150), 
    maxWidth: Scale.horizontalScale(150), 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: Scale.moderateScale(25),
    backgroundColor:'rgba(79, 166, 97,0.6)'
  },

  CRDTXT: {
    fontSize: Scale.moderateScale(16), 
    textAlign: 'center', 
    width: Scale.horizontalScale(95), 
    fontWeight: '500',
    fontStyle: 'italic', 
    color:MainColor, 
    textShadowRadius: Scale.moderateScale(0.2),
    textShadowColor: 'black',
  },
  //User management styles

  MNGUSR: {
    borderTopWidth:0.5,
    borderColor: 'rgba(79, 166, 97,0.9)',
    flex: 1, 
    maxHeight: Scale.verticalScale(90), 
    height: Scale.verticalScale(90),
    maxWidth: Scale.horizontalScale(370), 
    width: Scale.horizontalScale(370),
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    flexDirection: 'row'
  },

  EML: {
    fontSize: Scale.moderateScale(20), 
    maxWidth: Scale.horizontalScale(300), 
    width: Scale.horizontalScale(300), 
    textAlign: 'left', 
    color: SecColor, 
 },
 // Added plants list style

 PLNTLIST: {
  borderTopWidth:0.5,
  borderColor: FrthColor,
  flex: 1,
  flexDirection: 'row', 
  maxHeight: Scale.verticalScale(90), 
  height: Scale.verticalScale(90),
  maxWidth: Scale.horizontalScale(370),
  width: Scale.horizontalScale(370), 
  justifyContent: 'space-evenly', 
  alignItems: 'center',
},
PLNTNM: {
  maxWidth: Scale.horizontalScale(240), 
  width: Scale.horizontalScale(240),
  textAlign: 'center', 
  fontSize: Scale.moderateScale(20),
  color:TrdColor, 
},

PLNTCOUNT: {
  maxWidth: Scale.horizontalScale(30), 
  width: Scale.horizontalScale(30),
  textAlign: 'center', 
  fontSize: Scale.moderateScale(12),
  fontWeight: 'bold', 
  color:TrdColor, 
}, 

PLNTIMG: {
  maxHeight: Scale.verticalScale(80),
  maxWidth: Scale.horizontalScale(80),
  width: Scale.horizontalScale(80),
  height: Scale.verticalScale(80),
  borderRadius: Scale.moderateScale(10), 
}, 
});