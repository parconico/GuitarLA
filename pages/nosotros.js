import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de musica"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Duis sed nisl sodales, laoreet massa sit amet, luctus risus. Donec
              tincidunt odio non magna sagittis ultrices. Quisque dignissim quis
              lectus sit amet accumsan. Integer id sagittis magna, ac rutrum
              nibh. Aliquam tristique mollis neque, sit amet dictum ligula
              fringilla eleifend. Etiam mattis risus hendrerit iaculis
              consequat. Nunc sem quam, eleifend eget mi eget, hendrerit dapibus
              lectus. Duis vulputate enim in congue bibendum.
            </p>
            <p>
              In ornare convallis sapien quis dignissim. Quisque risus tortor,
              convallis viverra mauris at, congue fermentum quam. Morbi ut
              finibus urna, sagittis ullamcorper neque. Sed pellentesque
              sagittis hendrerit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse potenti. Nullam non libero a mi
              malesuada hendrerit non in quam. Morbi quis lectus porta mi
              consectetur ornare. Phasellus vulputate malesuada tellus in
              hendrerit. Vivamus vel turpis at augue interdum euismod at ac
              nisi. Quisque sed fermentum neque. Aliquam vehicula magna in urna
              venenatis condimentum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
