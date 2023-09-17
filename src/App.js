import "./Card.css";
import './App.css';
import Card from "./Card";



function App() {
  return (
    <div className="App">
     
      <Card 
      img="https://www.rudaw.net/s3/rudaw.net/ContentFiles/717629Image1.jpg?mode=crop&quality=70&rand=1&scale=both&w=752&h=472&version=5021877"  
      title="Yaşar Kemal" 
      description="Romanları ile edebiyat dünyasında “Çağdaş Homeros” olarak tanınan yazar Yaşar Kemal, 28 Şubat 2015 yılında hayatını kaybetti. Tüm ömrünü, insanlığı yazmaya adayan Yaşar Kemal, bize çoğu roman olmak üzere büyük bir miras bıraktı."/>
      <Card 
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UiJku2qjkwOhVG0b8IL4o97ZcO8VrZWt5Q&usqp=CAU" 
      title="Ahmet Arif" 
      description="Türk edebiyatının çok sevilerek yaygın üne kavuşmuş bir şairidir. Hayatta iken yayımladığı tek kitabı olan Hasretinden Prangalar Eskittim (1968), Türkiye'nin en çok basılan şiir kitaplarındandır. Şiirlerini samimi bir anlatımla, alışılmamış bağdaştırmalarla, serbest ölçüyle yazdı."/>
      <Card 
      img="https://poets.org/sites/default/files/images/biographies/NazimHikmet_NewBioImage.png" 
      title="Nazım Hikmet" 
      description="Türk şair ve yazardır. Şiirleri elliden fazla dile çevrilmiş ve eserleri birçok ödül almıştır. Türkiye'de serbest nazımın ilk uygulayıcısı ve çağdaş Türk şiirinin en önemli isimlerindendir. Uluslararası bir üne ulaşmıştır ve dünyada 20. yüzyılın en gözde şairleri arasında gösterilmektedir."/>

    
    </div>
  );
}

export default App;
