import classes from './LatestArticle.module.css';
import LatestArticleBlock from './LatestArticleBlock/index'
import LearnMoreButton from '../Service/LearnMoreButton/index';
// import LearnMoreButton from '../LearnMoreButton/index';

function LatestArticle() {

    return (
        <>
        <p className={classes.service_header_text}>Check out our latest article</p>

        {/* <p className={classes.service_text}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p> */}

        <div className={classes.service_blocks}>
            <LatestArticleBlock image="../src/assets/desease.png" 
                            header="Disease detection, check up in the laboratory"
                            text="In this case, the role of the health laboratory is very important to do a disease detection..."/>
            <LatestArticleBlock image="../src/assets/herbal.png" 
                           header="Herbal medicines that are safe for consumption"
                           text="Herbal medicine is very widely used at this time because of its very good for your health..."/>
            <LatestArticleBlock image="../src/assets/care.png" 
                           header="Natural care for healthy facial skin"
                           text="A healthy lifestyle should start from now and also for your skin health. There are some..."/>
            </div>
        <LearnMoreButton title="View all"/>
        </>
    );
}

export default LatestArticle