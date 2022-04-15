import './styles/global.css'
import GlobalStyle from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Chats from './pages/Chats';
import ChatsPrivados from './pages/ChatsPrivados';
import Configuracion from './pages/Configuracion';
import ChatsGrupales from './pages/ChatsGrupales';

function App() {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/chats-usuarios' element={<Chats />} />
              <Route path='/lista-contactos' element={<Contacts />} />
              <Route path='/chat/:id' element={<ChatsPrivados />} />
              <Route path='/configuracion-profile' element={<Configuracion />} />
              <Route path='/chats-grupales' element={<ChatsGrupales />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
    </>
  );
}

export default App;
