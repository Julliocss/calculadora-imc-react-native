 Calculadora de IMC

Aplicativo mobile desenvolvido em **React Native** que calcula o Índice de Massa Corporal (IMC) a partir do peso e da altura informados pelo usuário, exibindo o resultado e a classificação correspondente com cores de fácil identificação.

Projeto acadêmico desenvolvido durante o curso de **Análise e Desenvolvimento de Sistemas (ADS)**, com o objetivo de praticar os conceitos fundamentais de desenvolvimento mobile.

---

 ✨ Funcionalidades

- Entrada de **peso** (kg) e **altura** (m)
- Aceita vírgula ou ponto como separador decimal (`1,75` ou `1.75`)
- Cálculo do IMC com duas casas decimais
- Classificação automática conforme as faixas para adultos
- Cor diferente para cada classificação
- Validação dos dados com mensagens de erro amigáveis
- Botão para limpar os campos e fazer um novo cálculo

---

 📊 Classificação do IMC

| IMC | Classificação |
|---|---|
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 a 24,9 | Peso normal |
| 25 a 29,9 | Sobrepeso |
| 30 a 34,9 | Obesidade grau I |
| 35 a 39,9 | Obesidade grau II |
| 40 ou mais | Obesidade grau III |

**Fórmula utilizada:**

```
IMC = peso / (altura × altura)
```

**Exemplo:** peso de 70 kg e altura de 1,75 m resultam em IMC **22,86** (Peso normal).

---

 ✅ Validações implementadas

- Campos vazios
- Valores que não são números
- Peso ou altura iguais a zero ou negativos
- Altura acima de 3 (evita informar `175` em vez de `1,75`)

---

  Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- JavaScript (ES6+)

**Conceitos praticados:**

- Componentes básicos: `View`, `Text`, `TextInput`, `TouchableOpacity`
- Gerenciamento de estado com `useState`
- Renderização condicional
- Estilização com `StyleSheet`
- Funções e validação de dados
- Organização e comentários no código

---

 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS)
- App **Expo Go** instalado no celular Android, ou um emulador configurado (Android Studio)

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/Julliocss/calculadora-imc-react-native.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd calculadora-imc-react-native
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o projeto:
   ```bash
   npx expo start
   ```

5. Escaneie o QR Code com o Expo Go no celular, ou pressione `a` no terminal para abrir no emulador Android.

---

 📁 Estrutura do projeto

```
├── App.js          # Código principal do aplicativo
├── package.json    # Dependências e scripts
└── README.md       # Documentação
```

O aplicativo foi mantido em um único arquivo (`App.js`) de propósito, para facilitar a leitura e o acompanhamento durante o aprendizado.

---

 🔮 Possíveis melhorias futuras

- Histórico dos últimos cálculos
- Modo escuro
- Separar os componentes em arquivos
- Testes automatizados
- Versão para iOS

---

 ⚠️ Aviso

Este aplicativo tem finalidade **educacional**. O IMC é apenas uma referência e não substitui a avaliação de um profissional de saúde.

---

## 👨‍💻 Autor

**JULIO CESAR SILVA **
Estudante de Análise e Desenvolvimento de Sistemas

- LinkedIn: [Julio Cesar](https:/https://www.linkedin.com/in/julliocss/)
- GitHub: [SEU-USUARIO](https://github.com/julliocss)
