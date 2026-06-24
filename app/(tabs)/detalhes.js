import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { styles } from '../../assets/style/styles.js';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Detalhes() {

  const {
    titulo,
    imagem,
    descricao,
    preco
  } = useLocalSearchParams();

  return (
    <ScrollView>

      {/* TOPO - HEADER*/}
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

      {/* MENU */}
      <View style={styles.hero}>
        <View style={styles.heroIndex}>
          <Link href='/' asChild><TouchableOpacity style={styles.menuItem}><Text>Início</Text></TouchableOpacity></Link>
          <Link href='/sobre' asChild><TouchableOpacity style={styles.menuItem}><Text>Sobre</Text></TouchableOpacity></Link>
          <Link href='/contato' asChild><TouchableOpacity style={styles.menuItem}><Text>Contato</Text></TouchableOpacity></Link>
        </View>
      </View>

      {/* CONTEÚDO */}
      { /*=========== CONTEÚDO DA PÁGINA =============*/}
      <View style={styles.cardProduto}>
        <Text style={styles.etiqueta}>Detalhes do Produto</Text>
        <View style={styles.cardsDetalhes}>
          {/* Aqui irão os dados do curso */}
          <Text style={styles.nomeProduto}>{titulo}</Text>

          <Text style={styles.descricaoProduto}>{descricao}</Text>

          <Text style={styles.precoProduto}>{preco}</Text>
        </View>

        <View style={styles.Voltar}>
          <Link href="/cardapio">
            <TouchableOpacity style={styles.btnVoltar}>
              <Text style={styles.textoBtnVoltar}> Voltar ao Cardapio</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>


      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>© 2026 Café Central. Todos os direitos reservados.</Text>
        <Link href="/contato" asChild>
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </Link>
      </View>

    </ScrollView>
  );
}