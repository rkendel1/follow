import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
	return (
		<div>
			<div class="container">
    <div class="profile">
        <div class="profile-header">
            <div class="profile-header-cover"></div>
            <div class="profile-header-content">
                <div class="profile-header-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                </div>
                <ul class="profile-header-tab nav nav-tabs nav-tabs-v2">
                    <li class="nav-item">
                        <a href="#profile-post" class="nav-link" data-toggle="tab">
                            <div class="nav-field">Posts</div>
                            <div class="nav-value">382</div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#profile-followers" class="nav-link active" data-toggle="tab">
                            <div class="nav-field">Followers</div>
                            <div class="nav-value">1.3m</div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#profile-media" class="nav-link" data-toggle="tab">
                            <div class="nav-field">Photos</div>
                            <div class="nav-value">1,397</div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#profile-media" class="nav-link" data-toggle="tab">
                            <div class="nav-field">Videos</div>
                            <div class="nav-value">120</div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#profile-followers" class="nav-link" data-toggle="tab">
                            <div class="nav-field">Following</div>
                            <div class="nav-value">2,592</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="profile-container">
            <div class="profile-sidebar">
                <div class="desktop-sticky-top">
                    <h4>Username</h4>
                    <div class="font-weight-600 mb-3 text-muted mt-n2">@username</div>
                    <p>
                        Principal UXUI Design &amp; Brand Architecture for Studio. Creator of SeanTheme. Bringing the world closer together. Studied Computer Science and Psychology at Harvard University.
                    </p>
                    <div class="mb-1"><i class="fa fa-map-marker-alt fa-fw text-muted"></i> New York, NY</div>
                    <div class="mb-3"><i class="fa fa-link fa-fw text-muted"></i> seantheme.com/studio</div>
                    <hr class="mt-4 mb-4" />
                </div>
            </div>

            <div class="profile-content">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="tab-content p-0">
                            <div class="tab-pane fade active show" id="profile-followers">
                                <div class="list-group">
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" width="50px" class="rounded-sm ml-n2" />
                                        <div class="flex-fill pl-3 pr-3">
                                            <div><a href="#/" class="text-dark font-weight-600">full_name</a></div>
                                            <div class="text-muted fs-13px">party/state/district/type/senate_class</div>
                                        </div>
                                        <a href="#/" class="btn btn-outline-primary">Follow</a>
                                    </div>
                                </div>
                                <div class="text-center p-3">
                                    <a href="#/" class="text-dark text-decoration-none">Show more <b class="caret"></b></a>
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
export default App;