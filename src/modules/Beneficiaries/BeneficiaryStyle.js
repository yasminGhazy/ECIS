import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: { marginBottom: 50 },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    fab: {
        position: 'absolute',
        backgroundColor: "green",
        margin: 30,
        right: 0,
        bottom: 0,
    },
    rect: {
        height: 180,
        backgroundColor: "black",
        opacity: 0.7,
        borderRadius: 30,
        marginVertical: 10
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
export default styles;