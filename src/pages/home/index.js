import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Spinner from '../../components/Spinner';

import {
  Title,
  Subtitle,
  Text,
  Container,
  Box,
  CardRegister,
  Row,
  FormButton,
} from './styles';

import * as userActions from '../../store/user/action';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

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
      console.log(response);
    } catch (error) {
      setLoading(false);
      alert('Algo deu errado. Tente novamente mais tarde.');
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
        <div>
          <Text>
            Teve uma boa ideia? Um compromisso que não pode ser esquecido?
          </Text>
          <Text>
            Registre tudo no seu Bloco de Notas para que nada seja perdido!
          </Text>
        </div>
      </Box>
      <CardRegister onSubmit={handleStoreLogin}>
        <Subtitle>Registre abaixo a sua nova nota:</Subtitle>

        <Row>
          <Input
            type="text"
            label="Título:"
            placeholder="Ex.: Desafio de Cards"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Row>
        <Row>
          <TextArea
            type="text"
            label="Conteúdo:"
            placeholder="Ex.: Entregar o desafio de Cards."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Row>

        <Row style={{ justifyContent: 'space-between' }}>
          <div style={{ marginRight: '5px', width: '100%' }}>
            <Input
              label="Data:"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div style={{ marginLeft: '5px', width: '100%' }}>
            <Input
              label="Hora:"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </Row>
        <FormButton type="submit">Salvar Nota</FormButton>
      </CardRegister>
    </Container>
  );
};
