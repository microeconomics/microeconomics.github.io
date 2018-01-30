import React from 'react'
import Link from 'gatsby-link'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'

const Header = ({ page, min, max, onNext, onPrevious, onUpdate }) => {
  const prevButtonIfDisabled = page === min ? {...styles.disabled} : null;
  const nextButtonIfDisabled = page === max ? {...styles.disabled} : null;

  return (
    <div style={styles.headerWrapper}>
      <Button
        disabled={page === min}
        style={{
          ...styles.button,
          ...prevButtonIfDisabled
        }}
        onClick={onPrevious}
      >
        Previous
      </Button>
      <span style={styles.counter}>
        <input
          className="currentPageNumber"
          style={styles.currentPage}
          defaultValue={page}
          key={Math.random()}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              onUpdate(e.target.value);
              return false;
            }
            return true;
          }}
          onClick={e => e.target.select()}
        /> / {max}
      </span>
      <Button
        disabled={page === max}
        style={{
          ...styles.button,
          ...nextButtonIfDisabled
        }}
        onClick={onNext}
      >
        Next
      </Button>
    </div>
  );
}

const styles = {
  headerWrapper: {
    height: 65,
    background: '#32383E',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    padding: 15,
    color: '#fff',
    boxShadow: 'rgba(38, 42, 46, 0.48) 0px 3px 5px',
  },
  counter: {
    width: 100,
    display: 'inline-block',
    color: 'rgba(255,255,255,.8)',
    fontSize: '80%'
  },
  currentPage: {
    color: '#fff',
    fontSize: '120%',
    display: 'inline-block',
    textAlign: 'right',
    background: 'transparent',
    border: 'none',
    width: 35,
    background: '#292d32',
    borderRadius: '2px'
  },
  button: {
    color: '#fff',
    fontSize: '80%'
  },
  disabled: {
    opacity: '0.5'
  }
};

export default Header;
