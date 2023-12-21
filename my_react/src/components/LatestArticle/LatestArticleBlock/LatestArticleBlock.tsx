import classes from './LatestArticleBlock.module.css';

function LatestArticleBlock(props: { image: string; header: string; text: string}) {

    return (
        <>
        <div class={classes.card}>
            <img className={classes.image} src= {props.image} alt="portlandlogo"/>
            <div class={classes.container}>
                <h4 className={classes.h4text}><b>{props.header}</b></h4>
                <p className={classes.ptext}>{props.text}</p>
            </div>
        </div>
            
        </>
    );
}

export default LatestArticleBlock