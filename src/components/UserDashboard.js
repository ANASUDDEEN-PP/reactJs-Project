import React, { Component } from 'react';

class UserDashboard extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>User Dashboard</h2>
        <div style={styles.userInfo}>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Username:</strong> johndoe</p>
        </div>
        {/* Add user-specific content and features here */}
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  userInfo: {
    background: '#f5f5f5',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
};

export default UserDashboard;
