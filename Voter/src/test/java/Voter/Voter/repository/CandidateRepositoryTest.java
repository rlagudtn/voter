package Voter.Voter.repository;

import Voter.Voter.domain.Candidate;
import Voter.Voter.domain.ElectionType;
import Voter.Voter.domain.PoliticalParty;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.assertEquals;


@RunWith(SpringRunner.class)
@SpringBootTest
public class CandidateRepositoryTest {
    @Autowired
    CandidateRepository candidateRepository;

    @Test
    @Transactional
    @Rollback(value = false)
    public void enroll() {
        //given
        Candidate candidate = new Candidate("홍준표", 62, 3000000L, 64.3f, PoliticalParty.국민의힘,
                ElectionType.대통령선거);

        //when
        Long id = candidateRepository.save(candidate);
//
        Candidate one = candidateRepository.findOne(id);
//
//        //then
        assertEquals(one.getName(), candidate.getName());
    }
}