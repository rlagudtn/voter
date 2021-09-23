package Voter.Voter.repository;

import Voter.Voter.domain.Candidate;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class CandidateRepository {
    @PersistenceContext
    private EntityManager em;

    public Long save(Candidate candidate){
        em.persist(candidate);
        return candidate.getId();
    }

    public Candidate findOne(Long id) {
        return em.find(Candidate.class, id);
    }

    public List<Candidate> findAll() {
        return em.createQuery("select c from Candidate c", Candidate.class).getResultList();
    }


}
