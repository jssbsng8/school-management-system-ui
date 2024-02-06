export const ActionsDropdown = ({ id, onActionSelect, rows }) => {
  const userIndex = rows ? rows.findIndex((row) => row.id === id) : -1;
  const isUserActive = userIndex !== -1 && rows[userIndex].is_active;
  const userRole = rows[userIndex].role;
  const approved = rows[userIndex].is_approved;

  const handleAction = (action) => {
    onActionSelect(action, id);
  };

  return (
    <select
      onChange={(e) => handleAction(e.target.value)}
      defaultValue=""
      style={{
        width: "100%",
        height: "30px",
        background: "#0a0d1f",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "0 5px",
      }}
    >
      <option value="" disabled hidden>
        Select Action
      </option>
      {!isUserActive && (
        <option value="resendActivation">Resend Activation Link</option>
      )}
      <option value="deleteUser">Delete User Permanently</option>
      {isUserActive && userRole === "Admin" && (
        <option value="makeSuperAdmin">Make Super Admin</option>
      )}
      { approved && (
        <option value="suspension">Suspend Account</option>
      )}
    </select>
  );
};
