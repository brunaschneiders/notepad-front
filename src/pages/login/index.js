import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';

import Input from '../../components/Input';
import Spinner from '../../components/Spinner';

import {
  Title,
  Subtitle,
  Container,
  Box,
  UserData,
  Row,
  TextButton,
  FormButton,
} from './styles';

import * as userActions from '../../store/user/action';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createNew, setCreateNew] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleStoreUser(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
      });
      setLoading(false);
      alert('Usuário cadastrado com sucesso!');
      setCreateNew(false);
    } catch (error) {
      setLoading(false);
      alert('Erro ao tentar cadastrar usuário. Tente novamente mais tarde.');
    }
    setName('');
    setEmail('');
    setPassword('');
    setLoading(false);
  }

  async function handleStoreLogin(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      if (response.data.token) {
        dispatch(userActions.login(response.data));
      }
    } catch (error) {
      setLoading(false);
      alert('Erro ao tentar logar. Tente novamente mais tarde.');
    }
    setEmail('');
    setPassword('');
    setLoading(false);
  }

  return (
    <Container>
      <Spinner visible={loading} />
      <Box>
        <Title>Bloco de Notas</Title>
        {!createNew && (
          <>
            <UserData onSubmit={handleStoreLogin}>
              <Row>
                <Subtitle>Informe seus dados:</Subtitle>
              </Row>
              <Row>
                <Input
                  type="email"
                  label="Email:"
                  placeholder="nome@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Row>
              <Row>
                <Input
                  type="password"
                  label="Senha:"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Row>
              <FormButton type="submit">Entrar</FormButton>
            </UserData>
            <TextButton onClick={() => setCreateNew(true)}>
              Ainda não possui uma conta?
            </TextButton>
          </>
        )}
        {createNew && (
          <>
            <UserData onSubmit={handleStoreUser}>
              <Row>
                <Subtitle>Informe seus dados:</Subtitle>
              </Row>
              <Row>
                <Input
                  type="text"
                  label="Nome Completo:"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Row>
              <Row>
                <Input
                  type="email"
                  label="Email:"
                  placeholder="nome@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Row>
              <Row>
                <Input
                  type="password"
                  label="Senha:"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Row>
              <FormButton type="submit">Cadastre-se</FormButton>
            </UserData>
            <TextButton onClick={() => setCreateNew(false)}>
              Já possui uma conta?
            </TextButton>
          </>
        )}
      </Box>
    </Container>
  );
};
