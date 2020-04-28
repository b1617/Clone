import React from 'react';
import work from '../../assets/svg/work.svg';

export default function Index() {
  return (
    <div className='hero-wrap js-fullheight'>
      <div class='overlay'></div>
      <div className='container-fluid px-0'>
        <div className='row d-md-flex no-gutters slider-text align-items-end js-fullheight justify-content-end'>
          <img
            className='one-third align-self-end order-md-last img-fluid'
            src={work}
            alt=''
          />
          <div className='one-forth d-flex align-items-center js-fullheight'>
            <div className='text mt-5'>
              <h1 className='mb-5'>Coding is art, create yours</h1>
              <div className='ftco-search'>
                <div className='row'>
                  <div className='col-md-12 nav-link-wrap'>
                    <div
                      className='nav nav-pills text-center'
                      id='v-pills-tab'
                      role='tablist'
                      aria-orientation='vertical'
                    >
                      <a
                        className='nav-link active mr-md-1'
                        id='v-pills-1-tab'
                        data-toggle='pill'
                        href='#v-pills-1'
                        role='tab'
                        aria-controls='v-pills-1'
                        aria-selected='true'
                      >
                        Join
                      </a>
                    </div>
                  </div>
                  <div className='col-md-12 tab-wrap'>
                    <div className='tab-content p-4' id='v-pills-tabContent'>
                      <div
                        className='tab-pane fade show active'
                        id='v-pills-1'
                        role='tabpanel'
                        aria-labelledby='v-pills-nextgen-tab'
                      >
                        <form action='#' className='search-job'>
                          <div className='row no-gutters'>
                            <div className='col-md mr-md-2'>
                              <div className='form-group'>
                                <div className='form-field'>
                                  <div className='icon'>
                                    <span className='icon-briefcase'></span>
                                  </div>
                                  <input
                                    type='text'
                                    className='form-control'
                                    placeholder='enter secret id'
                                  />
                                </div>
                              </div>
                            </div>
                            <div className='col-md'>
                              <div className='form-group'>
                                <div className='form-field'>
                                  <button
                                    type='submit'
                                    className='form-control btn btn-secondary'
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
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
}
