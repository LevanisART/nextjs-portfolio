import React from 'react';

class Project extends React.Component {
  render() {
    const {image, description, screenshots, date, website, dribbble} = this.props;
    const { screenshot1, screenshot2, screenshot3 } = screenshots;
    return (
      <div>
				<div className="row">
					<div className="col-lg-12">
						<div className="project">
							<div className="item p-3 d-flex align-items-start">
                <div className="mt-3 mb-3 mb-md-0 py-1">
                  <a href={image} target="_blank" rel="noopener noreferrer" className="project_inner">
                    <div class="bar"></div>
                    <div class="projectimage"><img src={image} alt=""/></div>
                  </a>
                </div>
								<div className="pl-0 pl-md-3 w-100">
                  <div class="content">
                    <div class="text">
                      {
                        date &&
                        <div class="info-item project-date w-100 mb-3 d-flex">
                          <i className="fas fa-calendar-alt"></i>
                          <div class="d-flex flex-column ml-2">
                            <span className="item-title mb-1">Date:</span>
                            <span>{date}</span>
                          </div>
                        </div>
                      }
                      { 
                        description &&
                        <div class="info-item description w-100 mb-3 d-flex">
                          <i className="fas fa-info-circle"></i>
                          <div class="d-flex flex-column ml-2">
                            <span className="item-title mb-1">Description:</span>
                            <p>{description}</p>
                          </div>
                        </div>
                      }
                      { 
                        website &&
                        <div class="info-item description w-100 mb-3 d-flex">
                          <i className="fas fa-globe-europe"></i>
                          <div class="d-flex flex-column ml-2">
                            <span className="item-title mb-1">Website:</span>
                            <a target="_blank" rel="noopener noreferrer" href={website}>{website}</a>
                          </div>
                        </div>
                      }
                      {
                        dribbble &&
                        <div class="info-item dribbble-shot w-100 mb-3 d-flex">
                          <i className="fab fa-dribbble"></i>
                          <div class="d-flex flex-column ml-2">
                            <span className="item-title mb-1">See on dribbble:</span>
                            <a target="_blank" rel="noopener noreferrer" href={dribbble}>{dribbble}</a>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
								</div>
							</div>
                  
              { screenshots
                ?
                <div className="item d-flex flex-column">
                  <div class="d-flex align-items-center">
				      		  <div className="icon"><i className="far fa-images"></i></div>
                    <h5 class="title pl-4">Screenshots</h5>
                  </div>
				      		<div className="content">
				      			<div className="row screenshots mt-4 py-1">
                      { screenshot1 !== null
                        ?
				      			  	<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
				      			  		<a className="screenshot" href={screenshot1} target="_blank" rel="noopener noreferrer" title="Screenshot 1">
				      			  			<img src={screenshot1} alt="" />
				      			  		</a>
				      			  	</div>
                        : (
                          <div></div>
                        )
                      }
                      { screenshot2 !== null
                        ?
				      			  	<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
				      			  		<a className="screenshot" href={screenshot2} target="_blank" rel="noopener noreferrer" title="Screenshot 2">
				      			  			<img src={screenshot2} alt="" />
				      			  		</a>
				      			  	</div>
                        : (
                          <div></div>
                        )
                      }
                      { screenshot3 !== null
                        ?
				      			  	<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
				      			  		<a className="screenshot" href={screenshot3} target="_blank" rel="noopener noreferrer" title="Screenshot 3">
				      			  			<img src={screenshot3} alt="" />
				      			  		</a>
				      			  	</div>
                        : (
                          <div></div>
                        )
                      }
				      			</div>
				      		</div>
				      	</div>
                : (
                  <div></div>
                )

              }

						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Project;