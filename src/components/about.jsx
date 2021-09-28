

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          
          <div className="col-xs-12 col-md-6">
            <div className="about-text text-secondary ">
              <h2>What is a StarGarden?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="col-xs-6 col-md-12">  
                <div className="list-style">
                  <div >
                  
                  <div>
                  <h4>Minting a founders StarGarden </h4>
                  <p>By minting a founders StarGarden, you essentially become the owner of a playspace and the leader of the Tribe that populates it. Your Stargarden levels up along with its members, permanantly improving 'Play to Earn' opportunities for anyone on it.</p>
                  </div>
                
                  <div>
                  <h4>StarGarden NFT's</h4>
                  <p>StarGarden's are living entities that evolve. Progression content accumulates on your StarGarden and becomes permanent. Thus, the StarGarden becomes more powerful the more it is used, unlocking new gameplay, and enhancing its value if traded. </p>
                  </div>
                  </div>
                <div className="col-lg-16 col-sm-16 col-xs-18">
                  <div>
                  <h4>Tribes</h4>
                  <p>Other players have to be on a StarGarden to unlock gameplay; and, as a owner of one, you get to choose who can join. </p>
                  </div>
                  
                </div>
               </div> 
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
