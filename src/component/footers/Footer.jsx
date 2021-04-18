import {Container, Col, Row} from 'react-bootstrap';

const Footer =()=>{
    return (
        <div style={{ backgroundColor: '#617169' }}>
            
          <Container  style={{color: 'white'}} >
            <Row style={{paddingTop: '1%'}}>
                 <Col xs={6} md={4}>
                    <p style={{}}><b>Alamat</b><br/>
                    Desa Tegalpingen RT05/01 No. 53<br/>
                    Kecamatan Pengadegan<br/>
                    Kabupaten Purbalingga<br/>
                    Jawa Tengah<br/>
                    Indonesia<br/>
                    53393 <br />
                    Phone : +628112134212 <br /></p>
                </Col>
                <Col style={{alignContent: 'center', alignItems: 'center'}} xs={6} md={4}>
                    <p >
                        <b>Link Terkait</b><br />
                        <a href="https://bukalapak.com/u/aziz_faozi">Bukalapak</a><br />
                        <a href="https://tokopedia.com/labseni">Tokopedia</a><br />
                        <a href="https://instagram.com/labseni">Instagram</a><br />
                    </p>

                </Col>
                <Col xs={6} md={4}>
                    <b>Sponsor</b>
                    <p>Hoi yang mau sponsor bisa hubungi dulu, tidak semua seponsor dipersilahkan.</p>
                </Col>
            </Row>

            </Container>
        </div>
    );
}


export default Footer;
