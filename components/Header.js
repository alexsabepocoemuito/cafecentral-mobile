import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Header({ativo}) {w
    return(
      <View style={styles.header}>
        <Link href='/' asChild>
          <TouchableOpacity>
            <Image source={require('../../assets/images/cafecentral.jpg')} style={styles.headerLogo} />
          </TouchableOpacity>
        </Link>

        <Link href='/login' asChild>
          <TouchableOpacity>
            <Image source={require('../../assets/images/icone_perfil.png')} style={styles.iconeLogin} />
          </TouchableOpacity>
        </Link>
      </View>

        <View style={styles.hero}>
            <View style={styles.heroIndex}>
            <Link href='/' asChild><TouchableOpacity style={{ ...styles.menuItem, ...styles.ativo }}><Text>Início</Text></TouchableOpacity></Link>
            <Link href='/sobre' asChild><TouchableOpacity style={styles.menuItem}><Text> Sobre</Text></TouchableOpacity></Link>
            <Link href='/contato' asChild><TouchableOpacity style={styles.menuItem}><Text>Contato</Text></TouchableOpacity></Link>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
        header: {
        backgroundColor: '#e6e2e2',
    },

    headerLogo: {
        flex: 'flex-grow',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#e6e2e2',
        width: '100%',
        height: 140,
        resizeMode: "contain",
    },

    iconeLogin: {
        alignSelf: 'flex-end',
        width: '20%',
        height: 50,
        resizeMode: "contain",
        marginBottom: 10
    },

    menuItem: {
        color: '#000000',
        backgroundColor: '#dbd5d5',
        padding: 15,
        fontSize: 15,
        alignItems: 'center',
        borderRadius: 8,
        margin: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
})