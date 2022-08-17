import React from 'react';
import { Button, DatePicker  } from 'antd';

function Demo(props: any) {
    return (
        <div>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            {/* <p className={styles['color']}>127439127391289</p> */}
            <DatePicker />
        </div>
    );
}

export default Demo;