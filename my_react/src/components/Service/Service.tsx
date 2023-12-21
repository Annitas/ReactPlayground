import classes from './Service.module.css';
import ServiceBlocks from './ServiceBlocks/index';
import LearnMoreButton from './LearnMoreButton/index';

function Service() {

    return (
        <div className={classes.service_div}>
        <p className={classes.service_header_text}>Our services</p>

        <p className={classes.service_text}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>

        <div className={classes.service_blocks}>
            <ServiceBlocks image="../src/assets/magnifying.png" 
                            header="Search doctor"
                            text="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
            <ServiceBlocks image="../src/assets/pharmacy.png" 
                           header="Online pharmacy"
                           text="Buy your medicines with our mobile application with a simple delivery system"/>
            <ServiceBlocks image="../src/assets/consultation.png" 
                           header="Consultation"
                           text="Free consultation with our trusted doctors and get the best recomendations"/>
            </div>
            <div className={classes.service_blocks}>
            <ServiceBlocks image="../src/assets/details.png" 
                           header="Details info"
                           text="Free consultation with our trusted doctors and get the best recomendations"/>
            <ServiceBlocks image="../src/assets/emergency.png" 
                           header="Emergency care"
                           text="You can get 24/7 urgent care for yourself or your children and your lovely family"/>
            <ServiceBlocks image="../src/assets/tracking.png" 
                           header="Tracking"
                           text="Track and save your medical history and health data"/>
        </div>
        <LearnMoreButton title="Learn more"/>
        </div>
    );
}

export default Service