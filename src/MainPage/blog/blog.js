import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
        <NavBar/>
        <div className="title">
        <h3 className="text-center m-4">Jangan Sampai Salah! Berikut Cara Pilih </h3>
        <h3 className="text-center m-4" >Ukuran Baju Anak Berdasarkan Umur</h3>
        </div>
        <div className="blog-content">
            <center>
            <img src="./image/baju-home.jpg"/>
            <p>Dengan berkembangnya teknologi, kini semua jadi makin mudah. Kalau dulu orang-orang banyak pergi ke toko buat belanja pakaian, sekarang banyak orang lebih menyukai online shopping. Selain banyak diskon, kamu juga nggak perlu repot bepergian karena belanjaanmu diantar ke rumah. Sayangnya, kamu nggak bisa mencoba produknya secara langsung jika belanja online.</p>
            <br />
            <p>Alhasil, pasti nggak jarang ada orang yang salah beli ukuran, entah terlalu besar atau terlalu kecil. Nggak enak kan kalau begini? Buat mengatasi hal ini, kamu bisa kok mengetahui ukuran berdasarkan umur. Di artikel kali ini, kita akan membahas cara mengetahui ukuran baju anak berdasarkan umur serta beberapa rekomendasi fashion remaja. Yuk, simak dulu!</p>
            </center>
        </div><br />
        <div className="title2">
        <h3>Ukuran Baju Anak Berdasarkan Umur</h3>
        </div>
        <div className="blog-content2">
        <center>
        <p>Saat melakukan online shopping, kamu nggak bisa mencoba atau melihat produknya secara langsung. Oleh karena itu, jika membeli barang yang memiliki ukuran, Blibli Friends cuma bisa memperkirakan saja. Ada beberapa cara buat memperkirakan ukuran. Salah satu cara untuk memperkirakan ukuran baju anak adalah dari umurnya.</p>
        <br />
        <p>Sebenarnya, setiap brand atau toko baju punya standarnya sendiri untuk ukuran baju anak berdasarkan umurnya. Ada standar ukuran lokal dan internasional. Untuk standar internasional, rata-rata memiliki ukuran yang lebih besar daripada lokal. Berikut ini merupakan daftar ukuran baju berdasarkan umurnya untuk standar internasional.</p>
            <li>3-4 tahun: S (Tinggi badan: 105-115 dan Lebar dada: 53-59)</li>
            <li>5-6 tahun: S (Tinggi badan: 115-125 dan Lebar dada: 57-63)</li>
            <li>7-8 tahun: M (Tinggi badan 125-135 dan Lebar dada: 61-67)</li>
            <li>9-10 tahun: L (Tinggi badan: 135-145 dan Lebar dada: 65-71)</li>
            <li>11 tahun ke atas: XL (Tinggi badan: 145-155 dan Lebar dada: 71-77)</li>
        <p>Namun, ingat ya bahwa kamu tetap harus mengukur tinggi badan dan lebar dada dari anakmu terlebih dahulu. Ukuran di atas juga nggak bisa sepenuhnya dijadikan sebagai patokan karena setiap toko atau brand bisa memiliki panduan yang berbeda-beda.</p>
        </center>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog