import React from 'react';
import { Routes,Route} from 'react-router-dom';
import HomeContainer from './Home'
import PopUpContainer from './PopUp/PopUpContainer';
import UserContainer from './User'
import NotFound from '../NotFound';
import CameraInfo from './PopUp/CameraInfo'
import CollectionsContainer from './Collections'
import PhotoListContainer from './User/PhotoListContainer'
import CollectionPage from './Collections/CollectionPage';
import LikesContainer from './User/LikesContainer';
import SearchBar from './Navigation/SearchBar';

function App() {


    return (
        <>
            <SearchBar/>

            <Routes>
                
                <Route path="/" element={<HomeContainer  />} >
                    <Route path="p/:id/*" element={<PopUpContainer/>} >
                        <Route path="info" element={<CameraInfo/>}/>
                    </Route>
                </Route>
                
                <Route path='/search/:query/' element={<HomeContainer /> }>
                    <Route path="p/:id/*" element={<PopUpContainer/>} >
                        <Route path="info" element={< CameraInfo/>}/>
                    </Route>
                </Route>
                
                <Route path='/user/:username/' element={<UserContainer/>} >
                    <Route path="/photos" element={<PhotoListContainer/>}>
                        <Route path="p/:id/*" element={<PopUpContainer />} >
                            <Route path="info" element={<CameraInfo/>}/>
                        </Route>
                    </Route>

                    <Route path="likes" element={<LikesContainer/>}>
                        <Route path="p/:id/*" element={<PopUpContainer />} >
                            <Route path="info" element={<CameraInfo/>}/>
                        </Route>
                    </Route>                    
                    <Route path="collections" element={<CollectionsContainer/>}/>
                </Route>

                <Route path="/collection/:id/:title" element={<CollectionPage />}>
                    <Route path="p/:id/*" element={<PopUpContainer />} >
                        <Route path="info" element={<CameraInfo/>}/>
                    </Route>

                </Route>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App