import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function BotaoPrimario ({texto, funcao}) {
    return(
        <TouchableOpacity style = {styles.btnPrimario} onPress={funcao}>
            <Text style = {styles.textaoBotao}> {texto} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    btnAuth: {
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4ad76',
        width: 150,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e4ad76',
        borderRadius: 5,
        marginTop: 5
    },

    textoBtnAuth: {
        color: '#ffffff',
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        color: '#222'
    },

        textoAuth: {
        color: '#745739',
        fontSize: 15,
        textAlign: 'center',
    },

    btnSubmit: {
        backgroundColor: '#e4ad76',
        padding: 15,
        borderRadius: 8,
        marginTop: 15,
        alignSelf: 'center',
        width: 150,
        borderRadius: 5,
        marginTop: 5
    },

    textoSubmit: {
        fontSize: 16,
        textAlign: 'center'
    },

    btnCategoria: {
        color: '#000000',
        backgroundColor: '#745739',
        padding: 6,
        borderColor: '#ea9f51',
        borderWidth: 2,
        borderRadius: 8,
        margin: 10,
        textDecorationLine: 'none',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },

    btnDetalhes: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 8,
        marginBottom: 10,
    },

    textoBtnCategoria: {
        fontSize: 14,
        textAlign: 'center',
        color: '#ea9f51'
    },

    btnVoltar: {
        backgroundColor: '#ffffff',
        borderColor: '#ea9f51',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },

    textoBtnVoltar: {
        color: '#ea9f51',
    },

})