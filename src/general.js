import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        backgroundColor: '#D8D3D8',
        width: 250,
        height: 45,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    
    btn: {
        padding: 15,
        width: 180,
        backgroundColor: '#FF3737',
        marginBottom: 10,
    },

    btnText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'
    }
});

export default styles;