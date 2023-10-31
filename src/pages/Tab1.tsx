import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import axios from 'axios';
import { useState } from 'react';

const Tab1: React.FC = () => {
  const [randomImage, setRandomImage] = useState<any>(null);

  const fetchRandomImage = async () => {
    const accessKey = 'x4uH-CIXPo0LJkBlBhX5ZLXTrAZCMpp5Ft9pZlN23zY';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;

    try {
      const response = await axios.get(apiUrl);
      setRandomImage(response.data);
    } catch (error) {
      console.error("Erro ao buscar imagem aleatória:", error);
    }
  };
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCardContent className='div'>
          <IonCardContent className='teste'>Bem-vindo ao Meu Site</IonCardContent>
          <IonCardContent className='texto'>Este é um parágrafo de exemplo</IonCardContent>
          <IonButton  onClick={fetchRandomImage}>Clique Aqui</IonButton>
          {randomImage && (
          <IonImg src={randomImage.urls.small} alt={randomImage.alt_description} className='img'></IonImg>
        )}
        </IonCardContent>
        <IonCardContent className='div'>
          <IonCardContent className='Importante'>Seção Importante</IonCardContent>
          <IonCardContent className='texto'>Está é uma seção com conteúdo relevante</IonCardContent>
        </IonCardContent>
        <IonCardContent>
          <IonImg className='logo' src="src/assets/imgs/marca.jpg"></IonImg>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
