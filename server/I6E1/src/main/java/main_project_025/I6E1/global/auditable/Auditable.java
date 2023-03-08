package main_project_025.I6E1.global.auditable;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {
    @CreatedDate
    @Column(name = "created", insertable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES);

    @LastModifiedDate
    @Column(name = "modified", insertable = false)
    private LocalDateTime modifiedAt;

    @Column(name = "deleted")
    private boolean deleted = Boolean.FALSE;

}
