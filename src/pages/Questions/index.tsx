import React, { useState } from 'react';
// components
import { Header, Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';
import { View } from 'react-native';

const Questions: React.FunctionComponent = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    // TODO: criar lógica para o envio da dúvida
  }

  return (
    <View style={styles.container}>
      <Header
        screenTitle="Dúvidas"
        hasMenu
      />
      <View style={styles.mainContent}>
        <Input
          placeholder="Digite sua dúvida aqui"
          value={question}
          handleChange={setQuestion}
          multiline
          style={styles.formInput}
        />

        <Button
          text="Enviar"
          action={handleSubmit}
          size={{ width: '100%', height: 48 }}
          bgColor={globalStyles.colors.buttonBackgroundColor}
          color={globalStyles.colors.buttonTextColor}
          textIsUpper
          style={styles.formButton}
        />
      </View>
    </View>
  );
}

export default Questions;
