import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import collectionPointsData from './collectionPoints';

const CollectionPoints = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Pontos de Coleta"
          paragraph="Saiba onde e o que doar para ajudar vítimas de chuvas do Rio Grande do Sul"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
        {collectionPointsData.map((item) => (
            <Card key={item.id} collectionPoints={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionPoints;
