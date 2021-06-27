/* just for import invoicess */

import React from 'react';
import {PDFViewer, Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';

/* Craate styles */


const styles=StyleSheet.create({
    page: {
	flexDirection: 'row',
	backgroundColor: '#E4E4E4'
    },
    section: {
	//margin: 10,
	//padding: 10,
	flexGrow: 1,

    }
});

const MyDocument = ()=>(
    <Document>
      <Page size="A4" style={styles.page}>
	<View style={styles.section}>
          <Text>Section #1</Text>
	</View>
	<View style={styles.section}>
          <Text>Section #2</Text>
	</View>
      </Page>
    </Document>
)


const Inv=()=>{
    
    return (<PDFViewer>
    <MyDocument />
  </PDFViewer>);

}
export default Inv;
