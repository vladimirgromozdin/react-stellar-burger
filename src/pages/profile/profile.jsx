import React from 'react';
import styles from "./profile.module.css"
import ProfileForm from "../../components/profile-form/profile-form";

function ProfilePage() {
    return (
        <section className={styles.profileSection}>
            <ProfileForm />
        </section>
    );
}

export default ProfilePage;