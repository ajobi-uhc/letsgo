export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <br />
              <div className='col-md-8 col-md-offset-2 intro-text'>
               <br /><br />
                
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
               
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Mint (TBA)
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  )
}
