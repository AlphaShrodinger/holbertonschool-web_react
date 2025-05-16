import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bodySection: {
        marginBottom: '20px',
    },
});

function BodySectionWithMarginBottom() {
    return <section className={css(styles.bodySection)}>Content of Body Section</section>;
}

export default BodySectionWithMarginBottom;