import React, { useEffect, useRef } from 'react'
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from 'react-virtualized';
import ImageMeasurer from 'react-virtualized-image-measurer';
import useOnScreen from '../useOnScreen';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import UseOnResize from '../useOnResize';
import {Img} from '../../styles';
import {FaDownload} from 'react-icons/fa'
const Centered = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`
const Overlay = styled.div`
  position:absolute;
  display:flex;
  padding:1rem;
  flex-direction:column;
  justify-content:space-between;
  top:0;
  left:0;
  opacity:0;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.4);
  transition: 0.5s ease;
`;
const Container = styled.div`
  position:relative;
  outline:none;
  width:100%;
  height:${props=>props.height+'px'} !important;
  overflow:hidden;
  &:hover {
    ${Overlay}{
      opacity:1;
    }
  }
`
const OverlayDownloadLink = styled.a`
  color:white;
  z-index:1;
`


const columnWidth = 300;
const defaultHeight = 250;
const defaultWidth = columnWidth;

const cache = new CellMeasurerCache({
  defaultHeight,
  defaultWidth,
  fixedWidth: true,
});


const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: 2,
  columnWidth,
  spacer: 10,
});



const MasonryComponent = ({height,width,mas,setRef,itemsWithSizes}) => {

  function cellRenderer({index, key, parent, style}) {
    const {item, size} = itemsWithSizes[index];
    const imgHeight = columnWidth * (size.height / size.width) || defaultHeight;
    const imageProps = {to:`./p/${item.id}`,state:{item}}
    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
        <Container  ref={(index+1 === itemsWithSizes.length) ? setRef : null} style={style} height={imgHeight}  className="container" >
          <Overlay>
            <Link to={{
                  pathname: `/user/${item.user.username}/photos`,
              }}>     
              <Centered>
                <Img round src={item.user.profile_image.small} alt=''/>
                <span style={{color:'white',zIndex:1}}>
                  {item.user.name}
                </span>
              </Centered>
            </Link>
            <Link {...imageProps} >
              <div style={{height:'100%',width:"100%",position:"absolute",top:0,left:0,zIndex:0,cursor:"zoom-in"}} />
            </Link>
            
            <OverlayDownloadLink href={item.links.download+'?force=true'}><FaDownload/> Download </OverlayDownloadLink>
            
          </Overlay>
          
          <img
            src={item.urls.small}
            alt={item.alt_description}
            style={{
              height: imgHeight,
              width: columnWidth,
            }}
          />
          
        </Container>
      </CellMeasurer>
    );
  }
  
  return (
    <Masonry 
      ref={mas}
      cellCount={itemsWithSizes.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={height}
      width={width}
    />
  );
};

const Masonrys = ({hasMore,clear,setPageNum,photos,target}) => {
    const setRef = useOnScreen(setPageNum);
    let [columns] = UseOnResize(target)
    const masonryRef = useRef();
  

    useEffect(()=>{

        cache.clearAll()
        cellPositioner.reset({
            cellMeasurerCache: cache,
            columnCount: columns,
            columnWidth,
            spacer: 10, 
        })
        masonryRef.current.clearCellPositions();
      
    },[columns,clear])

    return (
      <Centered>
          <ImageMeasurer
              items={photos}
              image={item => item.urls.small}
              defaultHeight={defaultHeight}
              defaultWidth={defaultWidth}
          >    
              {({itemsWithSizes}) =>  <MasonryComponent height={target.clientHeight} width={columns*310} mas={masonryRef} setRef={hasMore ? setRef : null} itemsWithSizes={itemsWithSizes} />}
          </ImageMeasurer>
      </Centered>
    )
}
export default Masonrys