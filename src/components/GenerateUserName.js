import React, { useState, useEffect } from 'react';

const GenerateUserName = ({ name, surname, age }) => {

    const [usernameVisibility, setUsernameVisibility] = useState('none');
    const [showTooltip, setShowTooltip] = useState(false);
    const [dataEntered, setDataEntered] = useState(false);

    const showUsername = () => {
        setUsernameVisibility('block');
    }

    const showToolTipToUser = () => {
        setShowTooltip(!showTooltip);
    }

    useEffect(() => {
        setDataEntered(name && surname && age);
    }, [name, surname, age]);


    
    return (
        <>
            <div>
                <button
                    className={(dataEntered) ? '' : 'disabled'}
                    disabled={!dataEntered}
                    onMouseOver={showToolTipToUser}
                    onMouseOut={showToolTipToUser}
                    onClick={() => { showUsername(); navigator.clipboard.writeText(name + "." + surname + age); }}>
                    Generate username
                </button>
            </div>
            <div style={{ display: usernameVisibility }}>{name}.{surname}{age}</div>
            {showTooltip && (
                <div className="tooltip">
                    {dataEntered ? "The nickname will be copied automatically" : "Please fill up all required fields"}
                </div>
            )}

        </>
    )
}

export default GenerateUserName;