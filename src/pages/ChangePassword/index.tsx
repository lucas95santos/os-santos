import React, { useState } from 'react';
// components
import { Header, Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';
import { View } from 'react-native';

const ChangePassword: React.FunctionComponent = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = () => {
    // TODO: criar lógica para alterar a senha do usuário
  }

  return (
    <View style={styles.container}>
      <Header
        title="Alterar Senha"
        hasMenu={false}
      />
      <View style={styles.mainContent}>
        <Input
          placeholder="Senha atual"
          value={currentPassword}
          handleChange={setCurrentPassword}
          style={styles.formInput}
        />

        <Input
          placeholder="Nova senha"
          value={newPassword}
          handleChange={setNewPassword}
          style={styles.formInput}
        />

        <Input
          placeholder="Confirmar nova senha"
          value={confirmNewPassword}
          handleChange={setConfirmNewPassword}
          style={styles.formInput}
        />

        <Button
          text="Alterar"
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

export default ChangePassword;
