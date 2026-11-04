import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';

function classificarIMC(imc) {
  if (imc < 18.5) {
    return { texto: 'Abaixo do peso', cor: '#3B82F6' }; 
  } else if (imc < 25) {
    return { texto: 'Peso normal', cor: '#22C55E' };
  } else if (imc < 30) {
    return { texto: 'Sobrepeso', cor: '#EAB308' }; 
  } else if (imc < 35) {
    return { texto: 'Obesidade grau I', cor: '#F97316' };
  } else if (imc < 40) {
    return { texto: 'Obesidade grau II', cor: '#EF4444' }; 
  } else {
    return { texto: 'Obesidade grau III', cor: '#B91C1C' }; 
  }
}

export default function App() {
  const [peso, setPeso] = useState('');         
  const [altura, setAltura] = useState('');      
  const [resultado, setResultado] = useState(null); 
  const [mensagemErro, setMensagemErro] = useState('');

  function calcularIMC() {
    const pesoNumero = parseFloat(peso.replace(',', '.'));
    const alturaNumero = parseFloat(altura.replace(',', '.'));

    if (peso.trim() === '' || altura.trim() === '') {
      setResultado(null);
      setMensagemErro('Por favor, preencha o peso e a altura.');
      return;
    }
    if (isNaN(pesoNumero) || isNaN(alturaNumero)) {
      setResultado(null);
      setMensagemErro('Digite apenas números válidos. Exemplo: 70 e 1,75.');
      return;
    }
    if (pesoNumero <= 0 || alturaNumero <= 0) {
      setResultado(null);
      setMensagemErro('Peso e altura devem ser maiores que zero.');
      return;
    }
    if (alturaNumero > 3) {
      setResultado(null);
      setMensagemErro('Informe a altura em metros. Exemplo: 1,75.');
      return;
    }
    setMensagemErro('');
    const imc = pesoNumero / (alturaNumero * alturaNumero);
    const classificacao = classificarIMC(imc);

    setResultado({
      valor: imc.toFixed(2).replace('.', ','),
      texto: classificacao.texto,
      cor: classificacao.cor,
    });
  }
  function limparCampos() {
    setPeso('');
    setAltura('');
    setResultado(null);
    setMensagemErro('');
  }
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

      <ScrollView
        contentContainerStyle={estilos.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={estilos.titulo}>Calculadora de IMC</Text>
        <Text style={estilos.descricao}>
          Descubra seu Índice de Massa Corporal informando seu peso e sua
          altura. O resultado é uma referência para adultos.
        </Text>
        <View style={estilos.cartao}>
          <Text style={estilos.rotulo}>Peso (kg)</Text>
          <TextInput
            style={estilos.campo}
            placeholder="Ex: 70"
            placeholderTextColor="#9CA3AF"
            keyboardType="decimal-pad"
            value={peso}
            onChangeText={setPeso}
          />

          <Text style={estilos.rotulo}>Altura (m)</Text>
          <TextInput
            style={estilos.campo}
            placeholder="Ex: 1,75"
            placeholderTextColor="#9CA3AF"
            keyboardType="decimal-pad"
            value={altura}
            onChangeText={setAltura}
          />

          {mensagemErro !== '' && (
            <Text style={estilos.erro}>{mensagemErro}</Text>
          )}
          <TouchableOpacity style={estilos.botaoCalcular} onPress={calcularIMC}>
            <Text style={estilos.textoBotaoCalcular}>Calcular IMC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.botaoLimpar} onPress={limparCampos}>
            <Text style={estilos.textoBotaoLimpar}>Limpar</Text>
          </TouchableOpacity>
        </View>
        {resultado !== null && (
          <View style={[estilos.resultado, { borderColor: resultado.cor }]}>
            <Text style={estilos.resultadoRotulo}>Seu IMC é</Text>
            <Text style={[estilos.resultadoValor, { color: resultado.cor }]}>
              {resultado.valor}
            </Text>
            <View
              style={[estilos.etiqueta, { backgroundColor: resultado.cor }]}
            >
              <Text style={estilos.etiquetaTexto}>{resultado.texto}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
  },
  conteudo: {
    padding: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4F46E5',
    textAlign: 'center',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },
  rotulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#F9FAFB',
    marginBottom: 16,
  },
  erro: {
    color: '#B91C1C',
    backgroundColor: '#FEE2E2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 14,
  },
  botaoCalcular: {
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotaoCalcular: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4F46E5',
  },
  textoBotaoLimpar: {
    color: '#4F46E5',
    fontSize: 16,
    fontWeight: '600',
  },
  resultado: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    elevation: 4,
  },
  resultadoRotulo: {
    fontSize: 16,
    color: '#6B7280',
  },
  resultadoValor: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  etiqueta: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },
  etiquetaTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});