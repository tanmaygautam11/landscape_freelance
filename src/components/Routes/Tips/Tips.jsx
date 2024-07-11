import { useNavigate } from "react-router-dom";
import "./Tips.css";
import Tip from "./Tip";

const tipsData = [
  {
    id: 1,
    title: "Watering",
    content:
      "Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Vestibulum magna odio, rhoncus ac tempus at, elementum at lorem. Duis ut accumsan est. Cras scelerisque varius tellus nec ultrices. Mauris in ullamcorper ligula. Nunc tempor luctus pharetra. Maecenas eleifend erat vel nibh mollis, non lobortis mauris sodales. Mauris convallis non sem quis molestie. Etiam pulvinar orci vitae est euismod pretium. Nulla eget augue posuere, consectetur leo in, feugiat est.Donec sit amet magna consequat, aliquam tellus eget, feugiat felis. Suspendisse pulvinar nisi a urna vestibulum ultricies. Nam feugiat maximus libero nec rhoncus. Ut id dictum tellus. Sed laoreet dui orci, vitae commodo augue congue nec. Ut malesuada egestas pulvinar. Aenean sit amet magna et nibh sodales pulvinar vel et nibh. Vestibulum in velit non sapien laoreet lacinia. Praesent ut nisi sed ipsum fermentum gravida.Vivamus turpis purus, porta sed nunc sed, varius pulvinar risus. Maecenas sollicitudin augue nec leo vehicula hendrerit. Nulla facilisi. Aliquam malesuada magna sed ipsum blandit maximus. Donec diam dui, tempus vitae porta in, ornare eleifend ipsum. Suspendisse ullamcorper interdum mauris ut tempor. Nunc tincidunt id risus at placerat. Curabitur eros felis, tristique et accumsan nec, molestie ornare mauris. ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijDRbZIRBX9Y_72M-CTcNbVdXJRvV3yj77Kszw2UbpcOfIYL5eoHbv80P6z0U2Zna9iXCFQeizzxm2ntniCWdNDDHOcX-Wf53WsJOxPmWzxlqpuLPeqlJr8MaJCvR8HRfI2niVWgyNjn8/s1600/IMG_7569.jpg",
  },
  {
    id: 2,
    title: "Pruning",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna odio, rhoncus ac tempus at, elementum at lorem. Duis ut accumsan est. Cras scelerisque varius tellus nec ultrices. Mauris in ullamcorper ligula. Nunc tempor luctus pharetra. Maecenas eleifend erat vel nibh mollis, non lobortis mauris sodales. Mauris convallis non sem quis molestie. Etiam pulvinar orci vitae est euismod pretium. Nulla eget augue posuere, consectetur leo in, feugiat est.Donec sit amet magna consequat, aliquam tellus eget, feugiat felis. Suspendisse pulvinar nisi a urna vestibulum ultricies. Nam feugiat maximus libero nec rhoncus. Ut id dictum tellus. Sed laoreet dui orci, vitae commodo augue congue nec. Ut malesuada egestas pulvinar. Aenean sit amet magna et nibh sodales pulvinar vel et nibh. Vestibulum in velit non sapien laoreet lacinia. Praesent ut nisi sed ipsum fermentum gravida.Vivamus turpis purus, porta sed nunc sed, varius pulvinar risus. Maecenas sollicitudin augue nec leo vehicula hendrerit. Nulla facilisi. Aliquam malesuada magna sed ipsum blandit maximus. Donec diam dui, tempus vitae porta in, ornare eleifend ipsum. Suspendisse ullamcorper interdum mauris ut tempor. Nunc tincidunt id risus at placerat. Curabitur eros felis, tristique et accumsan nec, molestie ornare mauris. ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijDRbZIRBX9Y_72M-CTcNbVdXJRvV3yj77Kszw2UbpcOfIYL5eoHbv80P6z0U2Zna9iXCFQeizzxm2ntniCWdNDDHOcX-Wf53WsJOxPmWzxlqpuLPeqlJr8MaJCvR8HRfI2niVWgyNjn8/s1600/IMG_7569.jpg",
  },
  {
    id: 3,
    title: "Pruning",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna odio, rhoncus ac tempus at, elementum at lorem. Duis ut accumsan est. Cras scelerisque varius tellus nec ultrices. Mauris in ullamcorper ligula. Nunc tempor luctus pharetra. Maecenas eleifend erat vel nibh mollis, non lobortis mauris sodales. Mauris convallis non sem quis molestie. Etiam pulvinar orci vitae est euismod pretium. Nulla eget augue posuere, consectetur leo in, feugiat est.Donec sit amet magna consequat, aliquam tellus eget, feugiat felis. Suspendisse pulvinar nisi a urna vestibulum ultricies. Nam feugiat maximus libero nec rhoncus. Ut id dictum tellus. Sed laoreet dui orci, vitae commodo augue congue nec. Ut malesuada egestas pulvinar. Aenean sit amet magna et nibh sodales pulvinar vel et nibh. Vestibulum in velit non sapien laoreet lacinia. Praesent ut nisi sed ipsum fermentum gravida.Vivamus turpis purus, porta sed nunc sed, varius pulvinar risus. Maecenas sollicitudin augue nec leo vehicula hendrerit. Nulla facilisi. Aliquam malesuada magna sed ipsum blandit maximus. Donec diam dui, tempus vitae porta in, ornare eleifend ipsum. Suspendisse ullamcorper interdum mauris ut tempor. Nunc tincidunt id risus at placerat. Curabitur eros felis, tristique et accumsan nec, molestie ornare mauris. ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijDRbZIRBX9Y_72M-CTcNbVdXJRvV3yj77Kszw2UbpcOfIYL5eoHbv80P6z0U2Zna9iXCFQeizzxm2ntniCWdNDDHOcX-Wf53WsJOxPmWzxlqpuLPeqlJr8MaJCvR8HRfI2niVWgyNjn8/s1600/IMG_7569.jpg",
  },
  {
    id: 4,
    title: "Pruning",
    content:
      "Prune your plants in the spring to remove dead or damaged branches and to encourage new growth.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijDRbZIRBX9Y_72M-CTcNbVdXJRvV3yj77Kszw2UbpcOfIYL5eoHbv80P6z0U2Zna9iXCFQeizzxm2ntniCWdNDDHOcX-Wf53WsJOxPmWzxlqpuLPeqlJr8MaJCvR8HRfI2niVWgyNjn8/s1600/IMG_7569.jpg",
  },
  // Add more tips as needed...
];

const Tips = () => {
  const navigate = useNavigate();

  const handleReadMore = (tip) => {
    navigate(`/tip/${tip.id}`, { state: tip });
  };
  return (
    <div className="tips">
      <div className="tips-header">
        <img
          src="https://images.pexels.com/photos/17998785/pexels-photo-17998785/free-photo-of-close-up-of-fern.png?auto=compress&cs=tinysrgb"
          alt="Plants"
          className="header-image"
        />
        <div className="overlay"></div>
      </div>
      <div className="tips-container">
        <h2 className="tips-company">Baten Construction & Landscaping</h2>
        <h1 className="tips-heading">Tips</h1>
        <div className="tips-list">
          {tipsData.map((tip) => (
            <Tip
              key={tip.id}
              id={tip.id}
              title={tip.title}
              content={tip.content}
              image={tip.image}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
