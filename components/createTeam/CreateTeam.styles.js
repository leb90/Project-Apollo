import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: '#2896d3',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 40,
      paddingRight: 40
    },
    header : {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center'
    },
    selectContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center"
    },
    selectBtn:{
        flex:1,
        paddingVertical:5
    }
});

export default styles;