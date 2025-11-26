import { Quote, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import ceoImage from 'figma:asset/48e07d5066d10d3e10ffa694aff6e7e6ed8ac420.png';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';

// BEE Beta Logo - 使用网络链接
const logoImage = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/bee_beta.png';

export function CEOLetterPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'Bee-Beta - CEO Letter';
  }, []);
  
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#ffc75a]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="BEE Beta" className="h-8 lg:h-10 w-auto" />
            </Link>
            <Link to="/">
              <Button 
                variant="ghost" 
                className="text-[#ffc75a] hover:text-[#ffc75a]/80 hover:bg-[#ffc75a]/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('back_to_home')}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-[#ffc75a] mb-4">
                {t('a_letter_to_students')}
              </h1>
              <p className="text-gray-400">
                {t('learn_ai_shape_the_future')}
              </p>
            </div>

            {/* CEO Info */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="flex-shrink-0">
                <img
                  src={ceoImage}
                  alt="CEO"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#ffc75a]/20"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-white mb-2">{t('pin_zhou')}</h2>
                <p className="text-[#ffc75a] mb-2">
                  {t('founder_of_bebee_ai')}
                </p>
                <p className="text-gray-400 text-sm">
                  {t('initiator_of_be_beta_program')}
                </p>
              </div>
            </div>

            {/* Letter Content */}
            <div className="bg-zinc-900 rounded-lg p-8 lg:p-12 border border-[#ffc75a]/10 relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-[#ffc75a]/20" />
              
              <div className="relative z-10 space-y-6 text-gray-400 leading-relaxed">
                <p className="text-white">
                  {t('dear_student')}
                </p>

                <p>
                  {t('hello_i_am_pin')}
                </p>

                <p>
                  {t('thank_you_for_taking_the_time')}
                  <br />
                  {t('why_we_created_this_system')}
                  <br />
                  {t('what_core_challenges_it_solves')}
                  <br />
                  {t('how_we_will_accompany_you')}
                </p>

                {/* Section 1 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {t('why_create_the_beta_system')}
                  </h3>
                  
                  <p>
                    {t('over_the_past_few_years')}
                    <br />
                    {t('they_are_smart')}
                  </p>

                  <p className="text-white italic">
                    {t('the_gap_from_theory_to_practice')}
                  </p>

                  <p>
                    {t('especially_in_the_ai_era')}
                    <br />
                    {t('it_is_about')}
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('breaking_down_abstract_ideas')}
                    {t('using_the_right_questions')}
                    {t('integrating_model_capabilities')}
                    {t('launching_products_to_real_markets')}
                  </ul>

                  <p>
                    {t('in_other_words')}
                  </p>

                  <p>
                    {t('as_fei_fei_li_said')}
                    <br />
                    <span className="text-[#ffc75a]">
                      {t('our_human_education_system')}
                    </span>
                  </p>

                  <p>
                    {t('schools_teach_knowledge')}
                    <br />
                    {t('companies_need_capabilities')}
                    <br />
                    {t('and_the_era_demands_people')}
                  </p>

                  <p>
                    {t('beta_was_born')}
                    <br />
                    {t('helping_you_gain_core_practical_skills')}
                    <span className="text-[#ffc75a]">
                      {t('ai_product_engineering_market_validation')}
                    </span>
                    {t('while_youre_young')}
                  </p>
                </div>

                {/* Section 2 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {t('the_logic_behind_betas_three_stage_curriculum')}
                  </h3>
                  
                  <p>
                    {t('beta_doesnt_teach_concepts')}
                    <br />
                    {t('from_day_one')}
                    <span className="text-[#ffc75a]">
                      {t('real_launch')}
                    </span>
                    {t('')}
                  </p>

                  <p>
                    {t('it_consists_of_three_major_stages')}
                  </p>

                  <div className="bg-black/30 p-6 rounded-lg border border-[#ffc75a]/20 mt-4">
                    <h4 className="text-white mb-3">
                      {t('beta_galaxy_camp')}
                    </h4>
                    <p className="mb-3">
                      <span className="text-[#ffc75a]">{t('suitable_for')}</span>
                      {t('those_with_weak_foundations')}
                    </p>
                    <p className="mb-2">
                      <span className="text-[#ffc75a]">{t('goals')}</span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {t('build_a_publicly_launchable_product')}
                      {t('have_your_own_domain')}
                      {t('experience_the_complete_0_1_product_process')}
                      {t('get_a_portfolio_for_internship_applications')}
                    </ul>
                  </div>

                  <div className="bg-black/30 p-6 rounded-lg border border-[#ffc75a]/20 mt-4">
                    <h4 className="text-white mb-3">
                      {t('beta_cosmos_camp')}
                    </h4>
                    <p className="mb-3">
                      <span className="text-[#ffc75a]">{t('suitable_for')}</span>
                      {t('those_with_basic_engineering_skills')}
                    </p>
                    <p className="mb-2">
                      <span className="text-[#ffc75a]">{t('youll_master')}</span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {t('multimodal')}
                      {t('rag_vector_databases')}
                      {t('agent_tool_chains')}
                      {t('react_fastapi_full_stack')}
                      {t('private_deployment')}
                      {t('stripe_auto_deployment')}
                    </ul>
                    <p className="mt-3">
                      {t('the_goal_is_a_production_grade_ai_product')}
                    </p>
                  </div>

                  <div className="bg-black/30 p-6 rounded-lg border border-[#ffc75a]/20 mt-4">
                    <h4 className="text-white mb-3">
                      {t('beta_infinity_camp')}
                    </h4>
                    <p className="mb-3">
                      <span className="text-[#ffc75a]">{t('suitable_for')}</span>
                      {t('those_with_engineering_background')}
                    </p>
                    <p className="mb-2">
                      <span className="text-[#ffc75a]">{t('complete_in_12_weeks')}</span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {t('llm_environment')}
                      {t('full_chain_engineering_system')}
                      {t('product_strategy')}
                      {t('beta_testing')}
                    </ul>
                    <p className="mt-3 mb-2">
                      <span className="text-[#ffc75a]">{t('outstanding_students_will_also_receive')}</span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {t('founder_recommendation_letter')}
                      {t('big_tech_ai_company_internship_referrals')}
                      {t('seed_investment_opportunities')}
                    </ul>
                  </div>

                  <p className="mt-6">
                    {t('the_three_stage_system_doesnt_follow_a_training_route')}
                    <span className="text-[#ffc75a]">
                      {t('product_route')}
                    </span>
                    <br />
                    {t('its_not_about_teaching_you_skills')}
                  </p>

                  <p className="text-white">
                    {t('a_complete_capability_loop')}
                  </p>
                </div>

                {/* Learning Path */}
                <div className="pt-6 bg-[#ffc75a]/5 p-6 rounded-lg border border-[#ffc75a]/20">
                  <h4 className="text-[#ffc75a] mb-4">
                    {t('learning_path')}
                  </h4>
                  <p className="text-white text-center mb-6">
                    {t('pin_professional_open_course')}
                  </p>

                  <h4 className="text-[#ffc75a] mb-3">
                    {t('path_recommendations')}
                  </h4>
                  <p className="mb-4">
                    {t('choose_galaxy_camp')}
                    {t('choose_cosmos_camp')}
                    {t('choose_infinity_camp')}
                  </p>

                  <p className="text-center text-[#ffc75a]">
                    {t('for_course_and_instructor_details')}
                  </p>
                </div>

                {/* Section 3 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {t('why_do_college_students_have_natural_advantages')}
                  </h3>
                  
                  <p>
                    {t('many_people_mistakenly_think')}
                    <br />
                    {t('actually_you_might_be')}
                  </p>

                  <p>
                    {t('weve_observed_that_college_students')}
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('flexible_thinking')}
                    {t('still_have_expectations')}
                    {t('no_career_framework_constraints')}
                    {t('fast_learning_speed')}
                  </ul>

                  <p>{t('weve_seen')}</p>

                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {t('first_year_college_students')}
                    {t('non_cs_majors')}
                    {t('working_engineers')}
                  </ul>

                  <p className="text-white">
                    {t('theyre_not_geniuses')}
                  </p>
                </div>

                {/* Section 4 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {t('how_beta_differs_from_traditional_engineering_learning')}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-800/50 p-5 rounded-lg">
                      <p className="text-white mb-2">
                        {t('traditional_route')}
                      </p>
                      <p className="text-sm">
                        {t('syntax_framework_project_template')}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {t('process_is_boring')}
                      </p>
                    </div>
                    <div className="bg-[#ffc75a]/10 p-5 rounded-lg border border-[#ffc75a]/30">
                      <p className="text-[#ffc75a] mb-2">
                        {t('beta_route')}
                      </p>
                      <p className="text-sm">
                        {t('questions_product_engineering')}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        {t('every_step_points_to_an_outcome')}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6">
                    {t('our_underlying_design_is_simple')}
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('framework_over_code')}
                    {t('product_before_engineering')}
                    {t('aesthetics_over_manufacturing')}
                    {t('feedback_over_features')}
                    {t('questions_above_all')}
                  </ul>

                  <p className="text-white">
                    {t('this_is_the_real_logic')}
                  </p>
                </div>

                {/* Section 5 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {t('the_challenge_is_real')}
                  </h3>
                  
                  <p>
                    {t('i_wont_tell_you')}
                    <br />
                    <span className="text-white">
                      {t('saying_its_easy')}
                    </span>
                  </p>

                  <p>
                    {t('but_i_can_guarantee')}
                    <span className="text-[#ffc75a]">
                      {t('you_wont_face_difficulties_alone')}
                    </span>
                  </p>

                  <p>{t('we_provide')}</p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('hands_on_teaching')}
                    {t('weekly_fixed_qa_sessions')}
                    {t('camp_leader_led_assignment_reviews')}
                    {t('engineer_mentorship')}
                    {t('ai_toolchains')}
                    {t('complete_deployment')}
                    {t('real_demo_days')}
                  </ul>

                  <p>
                    {t('our_goal_isnt_to_make_you')}
                    <span className="text-gray-500">
                      {t('learn')}
                    </span>
                    <br />
                    {t('but_to_actually_make_you')}
                    <span className="text-[#ffc75a]">
                      {t('build')}
                    </span>
                    {t('')}
                  </p>
                </div>

                {/* Section 6 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {t('value_for_your_career')}
                  </h3>
                  
                  <p>
                    {t('by_participating_in_the_beta_system')}
                  </p>

                  <div className="space-y-4 mt-4">
                    <div className="bg-black/30 p-4 rounded-lg border-l-4 border-[#ffc75a]">
                      <p className="text-white mb-2">
                        {t('academic_career_competitiveness')}
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        {t('a_real_launched_product_portfolio')}
                        {t('engineer_and_founder_endorsement')}
                        {t('mastery_of_llms')}
                        {t('real_team_collaboration_experience')}
                      </ul>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg border-l-4 border-[#ffc75a]">
                      <p className="text-white mb-2">
                        {t('skill_enhancement')}
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        {t('full_chain_ai_engineering_capabilities')}
                        {t('product_breakdown_and_market_validation')}
                        {t('multimodal_private_deployment')}
                      </ul>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg border-l-4 border-[#ffc75a]">
                      <p className="text-white mb-2">
                        {t('career_direction_judgment')}
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        {t('should_i_pursue_engineering')}
                        {t('am_i_suited_for_entrepreneurship')}
                        {t('can_i_build_better_products')}
                      </ul>
                      <p className="text-sm text-gray-400 mt-2">
                        {t('practice_will_give_you_answers')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {t('if_you_decide_to_join')}
                  </h3>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {t('dont_fear_difficulty')}
                    {t('go_all_in')}
                    {t('write_down_every_confusion')}
                    {t('give_up_perfectionism')}
                    {t('allow_yourself_to_fail')}
                  </ul>

                  <p className="text-white mt-4">
                    {t('your_goal_isnt_to_complete_homework')}
                    <br />
                    {t('but_to_become_someone')}
                  </p>
                </div>

                {/* Final words */}
                <div className="pt-6">
                  <h3 className="text-[#ffc75a] mb-4">
                    {t('final_words')}
                  </h3>
                  
                  <p>
                    {t('in_the_wave_of_the_ai_era')}
                  </p>

                  <p className="text-white text-lg">
                    {t('people_who_can_turn_ai_into_products')}
                  </p>

                  <p>
                    {t('this_is_the_fundamental_reason')}
                  </p>

                  <p>
                    {t('if_youre_willing')}
                    <br />
                    {t('from_questioning')}
                    <br />
                    {t('walking_through_the_first_stage')}
                  </p>

                  <p className="text-[#ffc75a]">
                    {t('looking_forward_to_meeting_you')}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#ffc75a]/20 mt-8">
                  <p className="text-white mb-6">
                    {t('sincerely')}
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    {t('october_2025')}
                  </p>
                  <p className="text-white mb-1">
                    {t('pin_zhou')}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {t('founder_of_bebee_ai')}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {t('initiator_of_be_beta_program')}
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Highlight */}
            <div className="mt-12 p-6 bg-[#ffc75a]/5 border-l-4 border-[#ffc75a] rounded">
              <p className="text-gray-400 italic">
                {t('people_who_can_turn_ai_into_products')}
              </p>
              <p className="text-[#ffc75a] text-sm mt-2">— {t('pin_zhou')}</p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link to="/">
                <Button className="bg-[#ffc75a] hover:bg-[#ffc75a]/90 text-black">
                  {t('back_to_home')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#ffc75a]/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            {t('copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}