import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Modern styled components for the forgot password page
const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
`;

const ForgotCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #dc2626, #b91c1c);
  }
`;

const ForgotHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  
  .forgot-title {
    color: #1f2937;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
  }
  
  .forgot-subtitle {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0.5rem 0 0 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    color: #374151;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  color: #1f2937;
  background: white;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:disabled {
    background: #f9fafb;
    color: #6b7280;
    cursor: not-allowed;
  }
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 0.875rem 1rem;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  
  &:hover {
    background: #b91c1c;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #dc2626;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  
  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
`;

const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #16a34a;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const BackButton = styled.button`
  margin-top: 1rem;
  background: #f8fafc;
  border: 2px solid #d1d5db;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  
  &:hover {
    border-color: #dc2626;
    color: #dc2626;
    background: rgba(220, 38, 38, 0.1);
  }
  
  &::before {
    content: '←';
    font-size: 0.875rem;
    font-weight: bold;
  }
`;

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: username check, 2: reset password
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleCheckUsername = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!username) {
      setError('Please enter your username');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/check-username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Username check failed');
      }

      if (data.exists) {
        setStep(2);
        setSuccess('Username found! Please enter your new password.');
      } else {
        setError('Username not found. Please check your username and try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while checking username');
      console.error('Username check error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username, 
          newPassword 
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Password reset failed');
      }

      setSuccess('Password reset successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.message || 'An error occurred during password reset');
      console.error('Password reset error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToMain = () => {
    navigate('/');
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleBackToStep1 = () => {
    setStep(1);
    setUsername('');
    setNewPassword('');
    setConfirmPassword('');
    setError('');
    setSuccess('');
  };

  return (
    <ForgotContainer>
      <ForgotCard>
        <ForgotHeader>
          <h1 className="forgot-title">Reset Password</h1>
          <p className="forgot-subtitle">
            {step === 1 
              ? 'Enter your username to reset your password' 
              : 'Enter your new password'
            }
          </p>
        </ForgotHeader>

        {step === 1 ? (
          <Form onSubmit={handleCheckUsername}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}
            
            <FormGroup>
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                required
                disabled={isLoading}
              />
            </FormGroup>
            
            <ResetButton type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  Checking Username...
                </>
              ) : (
                'Check Username'
              )}
            </ResetButton>
          </Form>
        ) : (
          <Form onSubmit={handleResetPassword}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}
            
            <FormGroup>
              <label htmlFor="newPassword">New Password</label>
              <Input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={handlePasswordChange}
                required
                disabled={isLoading}
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={handlePasswordChange}
                required
                disabled={isLoading}
              />
            </FormGroup>
            
            <ResetButton type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  Resetting Password...
                </>
              ) : (
                'Reset Password'
              )}
            </ResetButton>
          </Form>
        )}

        <FormFooter>
          {step === 1 ? (
            <LinkButton type="button" onClick={handleBackToLogin}>
              Back to Sign In
            </LinkButton>
          ) : (
            <LinkButton type="button" onClick={handleBackToStep1}>
              Back to Username Check
            </LinkButton>
          )}
        </FormFooter>
      </ForgotCard>
    </ForgotContainer>
  );
};

export default ForgotPassword; 