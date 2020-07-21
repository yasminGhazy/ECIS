import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

  },
  container: {
    width: 370,
    height: 304
  },
  rect6: {
    width: 166,
    height: 100,
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 30
  },
  rect: {
    width: 166,
    height: 100,
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 30,
    borderRadius: 30,
    marginLeft: 10
  },
  rect6Row: {
    height: 100,
    flexDirection: "row",
    backgroundColor: "black",
    marginTop: 150,
    opacity: 0.7,
    marginLeft: 28
  },
  rect4: {
    top: 0,
    left: 204,
    width: 166,
    height: 100,
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 30
  },

  rect5: {
    left: 28,
    width: 166,
    height: 100,
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 30,
    top: 0
  },
 
  rect4StackStack: {
    
    marginTop: -220,
    marginBottom:40
    
  },
  header: {
    color: "white"

  },
  
  card: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      alignSelf: "center",
      borderRadius: 17,

      borderColor: "#fff",
      width: 270,
      height: 140,
      padding: 20

  },



});

export default styles;