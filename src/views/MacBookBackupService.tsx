"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookBackupService() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Backup Service Dubai | MacBook Repair Dubai"
      seoDescription="MacBook backup service in Dubai. Time Machine setup, data migration to a new Mac or external drive, full backup before any repair. From AED 150. Free diagnosis."
      path="/macbook-backup-service-dubai"
      eyebrow="Backup & data safety"
      h1="MacBook Backup Service in Dubai"
      subtitle="Time Machine set up properly, data moved to a new Mac or drive, and a full backup taken before any repair so nothing's lost. From AED 150, most done same day."
      startingPrice={150}
      timeline="Same day"
      whatsappPrefill="Hi, I need a MacBook backup or data migration - my model and what I want backed up:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "MacBook Repair",  path: "/apple-repair-dubai" },
        { name: "Backup Service",  path: "/macbook-backup-service-dubai" },
      ]}
      technician={{ name: "Abdul Aziz", years: 21, specialisation: "Mac data and software" }}
      serviceName="MacBook Backup Service"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook backup service in Dubai</strong> from <strong>MacBook Repair Dubai</strong> covers three things people put off until it's too late. We set up Time Machine the right way, migrate your data to a new Mac or an external drive, and take a full backup before any repair touches the board. Your files stay confidential, handled at our Concord Tower bench in Media City. From AED 150.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            This is backup and migration, not recovery. If files are already deleted, the drive won't mount, or the Mac won't boot, that's a different job - see our <a href="/macbook-data-recovery-dubai" className="text-accent font-semibold hover:underline">MacBook data recovery</a> page instead.
          </p>
        </>
      }
      whatWeFix={[
        "Time Machine set up on a new or existing external drive, with the first full backup verified",
        "Scheduled automatic backups so you never have to remember",
        "Data migration to a new MacBook (Migration Assistant, done properly)",
        "Transfer of photos, documents and projects to an external drive you keep",
        "Full backup before any repair, so a board or screen job can't cost you your files",
        "iCloud and cloud backup set up alongside a local copy",
        "Restore from an old Time Machine backup onto a fresh macOS install",
      ]}
      steps={[
        { title: "WhatsApp or free pickup", body: "Send your model and what you want backed up. We collect free across Dubai mainland, or you drop it at Concord Tower, Media City." },
        { title: "Assess data and storage", body: "We check how much data you have, how much free space the target drive needs, and whether iCloud, a local drive, or both is the right call." },
        { title: "Back up or migrate securely", body: "Time Machine configured, data copied to your new Mac or drive, or a full pre-repair image taken. Nothing leaves the bench." },
        { title: "Verify integrity", body: "We open the backup and check files actually opened - photos, documents, mail. A backup that won't restore is no backup." },
        { title: "Same-day return", body: "Most jobs go back the same day with a short note on how the backup runs and how to restore if you ever need to." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "12-month warranty on the backup setup and any scheduling we configure.",
        "Your data stays confidential - we don't browse, copy or keep anything beyond the job.",
        "Free re-check inside 12 months if a scheduled backup stops running.",
      ]}
      faqs={[
        { q: "How much is a MacBook backup service in Dubai?", a: "It starts at AED 150 for Time Machine setup with a verified first backup. Data migration to a new Mac is usually the same band; a full pre-repair backup is included free when we're already repairing the machine. We quote on WhatsApp once you tell us how much data and where it's going." },
        { q: "What's the difference between backup and data recovery?", a: "Backup is copying files you can still see, so you're safe if the Mac later fails. Recovery is pulling back files that are already deleted, on a dead drive, or on a Mac that won't boot. This page is backup, from AED 150. For lost or unreachable files see our data recovery page in Dubai." },
        { q: "Do you back up my MacBook before you repair it?", a: "Yes, whenever the drive is readable we take a full backup before any board, screen or water-damage work. It's free as part of the repair. Boards can fail mid-job and we'd rather have your data safe first. If the drive's already unreadable, that becomes a recovery job." },
        { q: "Time Machine or cloud backup - which should I use?", a: "Both, ideally. Time Machine on a local drive restores a whole Mac fast and works offline. iCloud or a cloud copy survives theft, fire or a lost drive. We set up a local Time Machine from AED 150 and can layer cloud on top so you've got two copies in two places." },
        { q: "Can you migrate everything to a new MacBook for me?", a: "Yes. We use Migration Assistant to move your apps, files, accounts and settings from the old Mac to the new one, then check it actually booted clean. Bring both machines to our Media City bench or we collect them. Most migrations finish the same day in Dubai." },
        { q: "Is my data confidential when you back it up?", a: "Completely. We don't open, copy or keep your files beyond what the job needs, and the Mac stays on our bench at Concord Tower the whole time. We've handled data for clients across Dubai since 2004 and confidentiality is the whole point of the service." },
        { q: "How long does a backup or migration take?", a: "Most are same day. A first Time Machine backup of a typical 256GB to 512GB Mac runs a few hours over USB; a migration to a new Mac is similar. Very large photo and video libraries can run overnight, in which case we hold it securely and return it the next day across Dubai." },
        { q: "Do you collect the MacBook or do I bring it in?", a: "Either. Free pickup and delivery across Dubai mainland, or drop it at Concord Tower, Media City, 9am to 10pm. Sharjah and Abu Dhabi pickup is AED 100 each way. WhatsApp 055 741 3706 and we'll arrange a time." },
        { q: "Will I need to buy an external drive?", a: "If you don't already have one, yes - a backup needs somewhere to live. We can advise on the right size for your data, usually a drive with at least twice your used space. You keep the drive and the backup; there's nothing locked to us." },
      ]}
      reviewNames={["Nab", "leaux leaux", "Habeeb Rahman", "Mariia Chymyrysova"]}
      related={[
        { label: "MacBook Data Recovery",        href: "/macbook-data-recovery-dubai",          description: "Deleted files, dead drive, won't boot. From AED 400." },
        { label: "Mac Setup & Data Migration",   href: "/mac-setup-data-migration-dubai",        description: "New Mac set up and your old one moved across." },
        { label: "MacBook Water Damage Repair",  href: "/macbook-water-damage-repair-dubai",     description: "Spilled liquid? We back up first, then repair." },
      ]}
      quickAnswer={{
        question: "What does a MacBook backup service cost in Dubai?",
        answer: "MacBook Repair Dubai sets up Time Machine, migrates data to a new Mac or external drive, and takes a full backup before any repair, from AED 150. Most jobs finish the same day, your data stays confidential, and we offer free pickup across Dubai mainland.",
      }}
    />
  );
}
