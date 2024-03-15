
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, closeModal }) => {
  

  return (
    <div>
      
      

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo de Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <table className="legend-table">
            <thead >
              <tr style={{ backgroundColor: 'lightpink' }}>
                <th>Clasification </th>
                <th>state</th>
                <th>Expression</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#14A2B8' }} >
                <td>MT</td>
                <td>Mint</td>
                
                <td>Mint</td>
              </tr>
              <tr style={{ backgroundColor:'#3DAF56'}}>
                <td>NM</td>
                <td>Near Mint</td>
                
                <td>Near Mint</td>
              </tr>
              <tr style={{ backgroundColor: '#82891D' }}>
                <td>EX</td>
                <td>Excellent</td>
                
                <td>Slightly Played | Excellent</td>
              </tr>
              <tr style={{ backgroundColor: '#FFC009' }}>
                <td>GD</td>
                <td>Good</td>
                
                <td>Moderately Played | Very Good</td>
              </tr>
              <tr style={{ backgroundColor: '#FD8B2B' }}>
                <td>LP</td>
                <td>Light Played</td>
               
                <td>Played | Good</td>
              </tr>
              <tr style={{ backgroundColor: '#E66874' }}>
                <td>PL</td>
                <td>Played</td>
               
                <td>Heavily Played</td>
              </tr>
              <tr style={{ backgroundColor: '#DC3545' }}>
                <td>PO</td>
                <td>Poor</td>
                <td>Poor</td>
              </tr>
            </tbody>
          </table>
          <button className='HowTo-button modal-btn-clouse' onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
