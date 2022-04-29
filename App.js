
import {SafeAreaView,
        StyleSheet,
        View,
        StatusBar,
        Text,
        Image
      } from "react-native";

      
import imagemPerfil from "./assets/fotoPerfil.jpg";
import imagemLogo from "./assets/logo-nubank-roxo-2048.png"
import imagemPix from "./assets/pix.png"
import imagemPagar from "./assets/transferencia.png"
import imagemTransferir from "./assets/pagamento.png"
import imagemDeposito from "./assets/deposit.png"
import imagemCartao from "./assets/cartao.png"

export default function App(){

  return(

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.imgLogo} source={imagemLogo}/>
      
        <View style={styles.containerPerfil}>

          <View style={styles.perfilImage}>
            <Image style={styles.imgPerfil} source={imagemPerfil}/>
          </View>
          <Text style={styles.textPerfil}>Olá, Maria</Text>

        </View>
      </View>
      <View style={styles.main}>
      
        <View style={styles.containerAbaConta}>
          <Text style={styles.textoAba}>Conta</Text>
        </View>
        <Text style={styles.textSaldo}>R$ 1.340,00</Text>
        <View style={styles.containerOpercao}>
          <View style={styles.containerOpcao}>
            <View style={styles.opcao}>
              <Image style={styles.imgOpcao} source={imagemPix}/>
            </View>
            <Text style={styles.textOpcao}>PIX</Text>
          </View>
          <View style={styles.containerOpcao}>
            <View style={styles.opcao}>
              <Image style={styles.imgOpcao} source={imagemDeposito}/>
            </View>
            <Text style={styles.textOpcao}>Deposito</Text>
          </View>
          <View style={styles.containerOpcao}>
            <View style={styles.opcao}>
              <Image style={styles.imgOpcao} source={imagemTransferir}/>
            </View>
            <Text style={styles.textOpcao}>Transferência</Text>
          </View>
          <View style={styles.containerOpcao}>
            <View style={styles.opcao}>
              <Image style={styles.imgOpcao} source={imagemPagar}/>
            </View>
            <Text style={styles.textOpcao}>Pagar</Text>
          </View>

        </View>

        <View style={styles.containerAbaCartao}>
          <Image style={styles.imgCartao} source={imagemCartao}/>
          <Text style={styles.textCartao}>Cartão de crédito</Text>
        </View>

        <View style={styles.caixaCarta}>
          <View style={styles.containerFatura1}>
            <Text style={styles.textCartao}>Fatura Atual</Text>
          </View>
          <View style={styles.containerFatura2}>
            <Text style={styles.textFatura}>R$ 940,00</Text>
          </View>
          <View style={styles.containerFatura3}>
            <Text style={styles.textCartao}>Limite disponivél R$ 7.500,00</Text>
          </View>
        </View>
      </View>
      <StatusBar/>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({

  header:{

    width: "100%",
    height: 145,
    backgroundColor: "#660066",
    flexDirection:"column",
    justifyContent: "center",
    padding: 0,

  },
  container:{

    flex: 1,
    backgroundColor: "#fff"
   
  },
  containerPerfil:{

    flexDirection: "row",
    alignItems: "center"

  },
  perfilImage:{

    height: 70,
    width:70,
    backgroundColor:"#fff",
    borderRadius: 35,
    marginLeft: 15,
   
  },
  imgPerfil:{

    width: "100%",
    height: "100%",
    borderRadius: 35
  },
  imgLogo:{
    position: "absolute",
    top: 2,
    right: 10,
    width: 100,
    height: 40
  },
  textPerfil:{

    fontSize: 20,
    marginLeft: 10,
    color: "#fff",
    fontWeight: "bold"
  },
  containerAbaConta:{

    flexDirection: "row",
    
  },
  textoAba:{

    color: "#aaa",
    fontSize: 20,
    letterSpacing: 2
  },
  textSaldo:{

    fontWeight: "bold",
    fontSize: 23,
    color: "#671B7A",
    lineHeight: 60,
    marginTop: 10
  },
  containerOpercao:{

    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  opcao:{

    width: 90,
    height: 90,
    backgroundColor: "#E2E2E2",
    borderRadius: 45,
    justifyContent:"center",
    alignItems: "center",
    margin: 4
  },
  containerAbaCartao:{

    width: "100%",
    height: 100,
    backgroundColor: "#D7D7D7",
    borderRadius: 15,
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    
  },
  main:{

    marginLeft: 15,
    marginRight: 15
  },
  caixaCarta:{

    width:"100%",
    height: 200,
    backgroundColor: "#FCFBFB",
    shadowColor: "#000",
    shadowOffset:{width:10,height:2},
    shadowOpacity: 1,
    elevation:2,
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 10
  },
  containerOpcao:{

    justifyContent: "center",
    alignItems: "center"
  },
  textOpcao:{

    fontSize: 14,
    fontWeight: "bold",
    color: "#a1a1a1"
  },
  imgOpcao:{

    width: 40,
    height: 40,
  },
  imgCartao:{
    width: 50,
    height: 60
  },
  textCartao:{

    color: "#444",
    marginLeft: 10,
    fontSize: 18,
  },
  containerFatura1:{

    flex: 2
  },
  containerFatura2:{

    flex: 3,
    paddingLeft: 10
  },
  containerFatura3:{

    flex: 3
  },
  textFatura:{

    color: "#B615DE",
    fontWeight: "bold",
    fontSize: 20
  }
  

})